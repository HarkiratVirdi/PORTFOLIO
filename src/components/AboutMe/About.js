import React, { Component } from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContextLang } from "../Context/ContextLang";

class About extends Component {
  constructor(props) {
    super(props);
    AOS.init();
  }

  render() {
    return (
      <ContextLang.Consumer>
        {(contextLang) => {
          const { isEnglish } = contextLang;
          return (
            <div className="about">
              <div
                className="para section-title"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-easing="ease"
              >
                {isEnglish
                  ? "I'm a Full Stack Developer and currently working as a Software Engineer at a Startup."
                  : "Je suis développeur full-stack et je suis en train de travailler comme un développeur logiciel."}
              </div>

              <div
                className="para"
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-duration="800"
                data-aos-easing="ease"
              >
                {isEnglish
                  ? "I create projects focused on good UI/UX and continously like to push myself towards excellence."
                  : "Je crée des projets qui ont un bon design et j'essaye de me pousser vers l'excellence"}
              </div>

              <div
                className="para"
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-duration="800"
                data-aos-easing="ease"
              >
                {isEnglish
                  ? "I am currently learning Angular to further my front-end Skills."
                  : "Je suis en train d'apprendre Angular pour que je puisse augmenter mes connaissances."}
              </div>

              <div
                className="para"
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-duration="800"
                data-aos-easing="ease"
              >
                {isEnglish
                  ? "When I'm not coding, you can find me in park or learning French."
                  : "Quand je suis libre, je fais du sport dans le parc ou j'apprende la langue française."}
              </div>
            </div>
          );
        }}
      </ContextLang.Consumer>
    );
  }
}

export default About;
