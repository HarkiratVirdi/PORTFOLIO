import React, { Component } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../Context/Context";
import { ContextLang } from "../Context/ContextLang";
import "./projectInfo.css";
import { gsap } from "gsap";
import SvgArrow from "../SvgRotate/SvgArrow";
import ScrollToTop from "../../HOC/ScrollTop";
import db from "../db/db";
import Gif from "./Gif";
import "./projectInfo.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectInfoHeader from "../ProjectInfoHeader/ProjectInfoHeader";

gsap.registerPlugin(ScrollTrigger);
class ProjectInfo extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      projectName: "",
      projectChoose: {
        id: 1,
        name: "Tira",
        image: "",
        descEn: "",
        technologies: [],
        descFr: "",
        video: [],
        url: "",
      },
    };
  }

  componentDidMount = () => {
    let container = document.querySelector(".projectInfo_content");
    if (window.innerWidth > 800) {
      gsap.to(container, {
        x: () =>
          -(container.scrollWidth - document.documentElement.clientWidth) +
          "px",
        scrollTrigger: {
          trigger: ".projectInfo",
          start: "center center",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          end: () => "+=" + container.offsetWidth * 0.7,
        },
      });
    }

    const UrlPathname = window.location.href;
    const URLSplit = UrlPathname.split("/");
    let projectNameFromURL = URLSplit[URLSplit.length - 1].toUpperCase();
    this.setState({ projectName: projectNameFromURL });

    let projectChoose = db.filter((e) => {
      return e.name.toUpperCase() === projectNameFromURL;
    });

    this.setState({ projectChoose: projectChoose[0] }, () => {
      this.setState({ loaded: true });
    });
  };

  render() {
    const { isLightTheme } = this.context;
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
    const colorProperty = isLightTheme ? "black" : "white";

    const allTechnologies = this.state.projectChoose.technologies.map((e) => {
      return (
        <li className="listed_items" key={e}>
          {e}
        </li>
      );
    });

    return (
      <ContextLang.Consumer>
        {(contextLang) => {
          const { isEnglish } = contextLang;
          return (
            <ScrollToTop>
              <ProjectInfoHeader
                name={this.state.projectChoose.name}
                theme={isLightTheme}
                lang={isEnglish}
              />
              <motion.div
                style={{ color: colorProperty }}
                className="projectInfo"
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="projectInfo_content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <aside>
                    <div className="aside_content">
                      <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={transition}
                        exit={{ y: 100, opacity: 0 }}
                        className="text_huge"
                      >
                        {this.state.projectChoose.name}
                        {window.innerWidth >= 800 ? <SvgArrow /> : ""}
                      </motion.h1>

                      <motion.a
                        exit={{ opacity: 0 }}
                        className="cta website_link"
                        href={this.state.projectChoose.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: isLightTheme ? "black" : "white",
                          display: "flex",
                        }}
                      >
                        {isEnglish ? "Launch Site" : "Ouvrir le site"}
                      </motion.a>

                      <motion.div
                        exit={{ opacity: 0 }}
                        className="project_role"
                      >
                        <div className="project_role_col m-mt-l">
                          <h5>
                            <strong> {isEnglish ? "Role" : "Role"}</strong>
                          </h5>
                          <p>
                            {isEnglish
                              ? "Design, Development"
                              : "Design , Développement"}
                          </p>
                        </div>
                        <div className="project_role_col m-mt-l">
                          <h5>
                            <strong> {isEnglish ? "Year" : "Année"}</strong>
                          </h5>
                          <p>2020</p>
                        </div>
                      </motion.div>
                    </div>
                  </aside>
                  <aside className="technologies">
                    <h4>Technologies: </h4>
                    <ul className="listed">{allTechnologies}</ul>
                  </aside>

                  <Gif gif={this.state.projectChoose.video[0]}></Gif>
                  <Gif gif={this.state.projectChoose.video[1]}></Gif>
                  <Gif gif={this.state.projectChoose.video[2]}></Gif>
                  <Gif gif={this.state.projectChoose.video[3]}></Gif>
                  <Gif gif={this.state.projectChoose.video[4]}></Gif>

                  <aside>
                    <div className="proj_desc">
                      <p>
                        {isEnglish
                          ? this.state.projectChoose.descEn
                          : this.state.projectChoose.descFr}
                      </p>
                      <a
                        className="link cta website_link"
                        href={this.state.projectChoose.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: isLightTheme ? "black" : "white" }}
                      >
                        {isEnglish ? "Launch Site" : "Ouvrir le site"}
                      </a>
                    </div>
                  </aside>
                </motion.div>
              </motion.div>
            </ScrollToTop>
          );
        }}
      </ContextLang.Consumer>
    );
  }
}

export default ProjectInfo;
