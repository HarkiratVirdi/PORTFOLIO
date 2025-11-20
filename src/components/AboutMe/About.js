import React, { Component } from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ContextLang } from '../Context/ContextLang';

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
                  ? "I'm a Frontend Developer and currently working as a Senior Software Engineer at S&P Global."
                  : 'Je suis développeur frontend et je suis en train de travailler comme un développeur logiciel senior.'}
              </div>

              <div
                className="para"
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-duration="800"
                data-aos-easing="ease"
              >
                {isEnglish
                  ? 'I write clean, readable and maintainable code and continously like to push myself towards excellence.'
                  : "J'écris du code propre, lisible et maintenable et j'aime me pousser continuellement vers l'excellence"}
              </div>

              <div
                className="para"
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-duration="800"
                data-aos-easing="ease"
              >
                {isEnglish
                  ? 'I am currently learning C# to further my development skills.'
                  : "Je suis en train d'apprendre C# pour que je puisse augmenter mes connaissances."}
              </div>

              <div
                className="para"
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-duration="800"
                data-aos-easing="ease"
              >
                {isEnglish
                  ? "When I'm not coding, you can find me in park or learning french."
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
