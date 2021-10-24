import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import gsap from "gsap";
import { ThemeContext } from "../Context/Context";
import { ContextLang } from "../Context/ContextLang";
class Header extends Component {
  constructor(props) {
    super(props);
    this.border = null;
  }

  componentDidMount() {
    const header = gsap.timeline();

    header.to(".link", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        each: 0.18,
      },
    });
    header.to(this.border, {
      scaleX: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power2.in",
    });
  }

  render() {
    return (
      <ContextLang.Consumer>
        {(contextLange) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { lightTheme, darkTheme, isLightTheme } = themeContext;
              const { toggleLang } = contextLange;
              return (
                <header>
                  <ul className="header-list">
                    <li
                      style={{
                        color: isLightTheme
                          ? lightTheme.syntax
                          : darkTheme.syntax,
                      }}
                      ref={(links) => (this.links = links)}
                      className="left link"
                    >
                      Harkirat Singh Virdi
                    </li>
                    <li
                      style={{
                        color: isLightTheme
                          ? lightTheme.syntax
                          : darkTheme.syntax,
                      }}
                      ref={(links) => (this.links = links)}
                      className="center link m-hide"
                    >
                      Portfolio
                    </li>
                    <Link
                      style={{
                        color: isLightTheme
                          ? lightTheme.syntax
                          : darkTheme.syntax,
                      }}
                      ref={(links) => (this.links = links)}
                      className="link right cta"
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleLang();
                      }}
                    >
                      EN-FR
                    </Link>

                    <div
                      style={{
                        background: isLightTheme
                          ? lightTheme.syntax
                          : darkTheme.syntax,
                      }}
                      ref={(border) => (this.border = border)}
                      className="header-border"
                    ></div>
                  </ul>
                </header>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </ContextLang.Consumer>
    );
  }
}
export default Header;
