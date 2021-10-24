import React, { Component } from "react";
import "./ClipText.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class ClipText extends Component {
  constructor(props) {
    super(props);
    this.text = null;
    this.contentRef = null;
  }

  componentDidMount() {
    gsap.to(".clip-content", {
      y: "0",
      duration: 0.8,
    });
  }

  render() {
    return (
      <div
        ref={(contentRef) => (this.contentRef = contentRef)}
        className="clip-container"
      >
        <div ref={(text) => (this.text = text)} className="clip-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ClipText;
