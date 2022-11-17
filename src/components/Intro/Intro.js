import React, { Component } from "react";
import "./Intro.css";
import ClipText from "../ClipText/ClipText";
import SvgRotate from "../SvgRotate/SvgRotate";
import ThemeSvg from "../ThemeSvg/ThemeSvg";
import { ThemeContext } from "../Context/Context";
import { ContextLang } from "../Context/ContextLang";
import Resume from "../../Harkirat_Singh_Resume.pdf";

class Intro extends Component {
  static contextType = ThemeContext;

  render() {
    const { lightTheme, darkTheme, isLightTheme } = this.context;
    const colorProperty = isLightTheme ? lightTheme.syntax : darkTheme.syntax;
    return (
      <ContextLang.Consumer>
        {(contextLang) => {
          const { isEnglish } = contextLang;
          return (
            <main className="section-space">
              <div
                className="content"
                style={{
                  color: colorProperty,
                }}
              >
                <ClipText>{isEnglish ? "Interactive" : "Interactif "}</ClipText>
                <ClipText>{isEnglish ? "Designer &" : "Créateur &"}</ClipText>
                <ClipText>{isEnglish ? "Developer" : "Développeur"}</ClipText>

                <div className="important_links mt-l">
                  <a
                    style={{ color: colorProperty }}
                    href={Resume}
                    target="_blank"
                    rel="noreferrer"
                    className="underline resume"
                    download
                  >
                    Resume
                  </a>
                  <a
                    style={{ color: colorProperty }}
                    href="https://www.linkedin.com/in/harkirat-singh-8254a21b4/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Linkdelin
                  </a>
                  <a
                    style={{ color: colorProperty }}
                    href="https://github.com/harkiratvirdi"
                    target="_blank"
                    className="underline"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    style={{ color: colorProperty }}
                    href="tel:647-685-1425"
                    className="underline"
                  >
                    +1(647)685-1425
                  </a>
                </div>
              </div>

              <div className="all-svg">
                <SvgRotate>
                  {isEnglish
                    ? "Scroll - Down - Theme - Changer"
                    : "Glissez -vers - le - bas - Le thème"}
                  -
                </SvgRotate>
                <ThemeSvg />
              </div>
            </main>
          );
        }}
      </ContextLang.Consumer>
    );
  }
}

export default Intro;
