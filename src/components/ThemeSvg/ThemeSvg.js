import React, { Component } from "react";
import "./ThemeSvg.css";
import { ThemeContext } from "../Context/Context";

class ThemeSvg extends Component {
  static contextType = ThemeContext;
  render() {
    const { lightTheme, darkTheme, isLightTheme, toggleTheme } = this.context;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 496"
        id="theme"
        onClick={toggleTheme}
        style={{
          color: `${isLightTheme ? lightTheme.syntax : darkTheme.syntax}`,
        }}
      >
        <path
          fill="currentColor"
          d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z"
          transform="translate(-8 -8)"
        />
      </svg>
    );
  }
}

export default ThemeSvg;
