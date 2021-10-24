import React, { Component } from "react";
import { ThemeContext } from "../Context/Context";

export default class SvgArrow extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme } = this.context;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 200 200"
      >
        <g transform="translate(-102.5 -14780.5)">
          <path
            d="M-57.625-7.9l38.054-38.054H-27.2l-4.723-4.723,20.889.363.227.182.363,20.934-4.768-4.768v-7.811l-38.1,38.145Z"
            transform="matrix(0.719,-0.695,0.695,0.719,246.656,14877.2)"
            fill={isLightTheme ? "#000" : "#fff"}
            data-svg-origin="-57.625 -50.677001953125"
            style={{ opacity: 1 }}
          ></path>
          <circle
            opacity=".2"
            cx="90.5"
            cy="90.5"
            r="90.5"
            transform="translate(112.5 14790.5)"
            fill="none"
            stroke="var(--color)"
            stroke-width="3"
          ></circle>
          <circle
            cx="90.5"
            cy="90.5"
            r="90.5"
            transform="matrix(1,0,0,1,112.5,14790.5)"
            fill="none"
            stroke="var(--color)"
            stroke-width="3"
            data-svg-origin="90.5 90.5"
          ></circle>
        </g>
      </svg>
    );
  }
}
