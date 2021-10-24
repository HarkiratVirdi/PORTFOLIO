import React, { Component, createRef } from "react";
import ClipText from "../ClipText/ClipText";
import "./projects.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeContext } from "../Context/Context";
import { ContextLang } from "../Context/ContextLang";
import Project1 from "../../images/project1.jpg";
import Project2 from "../../images/project2.jpg";
import Project3 from "../../images/project3.jpg";

import About from "../AboutMe/About";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Project/Project.css";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

class Projects extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = { clientWidth: 0, canScroll: true };
    this.projectsContainer = createRef();
    AOS.init();
  }

  addClassAbsolute = () => {
    this.setState({ ...this.state, canScroll: false });
  };

  render() {
    const { lightTheme, darkTheme, isLightTheme } = this.context;

    const transition = { duration: 0.5, ease: [0.6, 0.61, 0.05, 0.9] };
    return (
      <ContextLang.Consumer>
        {(contextLang) => {
          const { isEnglish } = contextLang;
          return (
            <motion.div
              exit={{ opacity: 0 }}
              className="projects"
              style={{
                color: isLightTheme ? lightTheme.syntax : darkTheme.syntax,
              }}
            >
              <div
                className="projects__container section-title"
                ref={this.projectsContainer}
              >
                <ClipText>
                  {" "}
                  <motion.div>{isEnglish ? "Projects" : "Projets"}</motion.div>
                </ClipText>
                <Link
                  to={`/project/Tira`}
                  className="project"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="800"
                  data-aos-easing="ease"
                >
                  <motion.img
                    transition={{ delay: 1.2, ...transition }}
                    exit={{
                      opacity: 0,
                    }}
                    className="project__img"
                    onClick={this.addClassAbsolute}
                    src={Project1}
                    alt=""
                  />
                  <motion.div
                    exit={{ opacity: 0 }}
                    transition={transition}
                    className="project__container"
                  >
                    <div className="project__no">01</div>
                    <div className="project__content">
                      <h3 className="project_name">
                        {isEnglish ? "Jewellery Website" : "Site de bijoux"}
                      </h3>
                      <h5 className="project_desc">
                        {" "}
                        {isEnglish ? "E-Commerce" : "Commerce électro"}
                      </h5>
                    </div>
                    <div className="project__link">
                      {" "}
                      {isEnglish ? "View Case" : "Voir le cas"}
                    </div>
                  </motion.div>
                </Link>
                <Link
                  to={`/project/MFlix`}
                  className="project"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="800"
                  data-aos-easing="ease"
                >
                  <img className="project__img" src={Project2} alt="" />
                  <div className="project__container">
                    <div className="project__no">02</div>
                    <div className="project__content">
                      <h3 className="project_name">
                        {isEnglish ? "Movie Rental" : "Location de films"}
                      </h3>
                      <h5 className="project_desc">
                        {isEnglish ? "E-Commerce" : "Commerce électro"}
                      </h5>
                    </div>
                    <div className="project__link">
                      {" "}
                      {isEnglish ? "View Case" : "Voir le cas"}
                    </div>
                  </div>
                </Link>

                <Link
                  to={`/project/Realtor`}
                  className="project"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="800"
                  data-aos-easing="ease"
                >
                  <img className="project__img" src={Project3} alt="" />
                  <div className="project__container">
                    <div className="project__no">03</div>
                    <div className="project__content">
                      <h3 className="project_name">
                        {isEnglish
                          ? "Realtor's Site"
                          : "Site de l'agent immobilier"}
                      </h3>
                      <h5 className="project_desc">
                        {isEnglish ? "Real Estate" : "immobilier"}
                      </h5>
                    </div>
                    <div className="project__link">
                      {isEnglish ? "View Case" : "Voir le cas"}
                    </div>
                  </div>
                </Link>

                <ClipText>
                  {isEnglish ? "About Me" : "À propos de moi"}
                </ClipText>
                <span></span>
                {/* {window.innerWidth >= 800 ? <SvgArrow /> : ""} */}
              </div>
              <About />
              <Footer />
            </motion.div>
          );
        }}
      </ContextLang.Consumer>
    );
  }
}

export default Projects;
