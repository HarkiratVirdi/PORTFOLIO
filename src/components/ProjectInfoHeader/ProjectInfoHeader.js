import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/Context";

class ProjectInfoHeader extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme } = this.context;
    const colorProperty = isLightTheme ? "black" : "white";
    return (
      <header className="project_header" style={{ color: colorProperty }}>
        <nav>
          <ul>
            <Link to="/" style={{ color: colorProperty, cursor: "pointer" }}>
              {this.props.lang ? "Back" : "Derrière"}
            </Link>
            <li style={{ color: colorProperty }}>{this.props.name}</li>
          </ul>
          <div
            style={{
              background: colorProperty,
              position: "static",
              top: "40px",
              transform: "scaleX(1)",
            }}
            className="header-border"
          ></div>
        </nav>
      </header>
    );
  }
}

export default ProjectInfoHeader;
