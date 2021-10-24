import React, { Component } from "react";
import "./SvgRotate.css";
import { ThemeContext } from "../Context/Context";

class SvgRotate extends Component {
  static contextType = ThemeContext;

  render() {
    const { lightTheme, darkTheme, isLightTheme } = this.context;

    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        id="circle"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
      >
        <defs>
          <path
            id="circlePath"
            d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <circle cx="150" cy="100" r="75" fill="none" />
        <g>
          <use xlinkHref="#circlePath" fill="none" />
          <text fill={`${isLightTheme ? lightTheme.syntax : darkTheme.syntax}`}>
            <textPath xlinkHref="#circlePath">{this.props.children}</textPath>
          </text>
        </g>
      </svg>
    );
  }
}

export default SvgRotate;
