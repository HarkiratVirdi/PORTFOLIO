import React, { Component } from "react";
// import "./Loading.css";
import { gsap } from "gsap";
import { Loader, Name, NameDiv, Slider } from "./LoadingStyles";
import { ThemeContext } from "../Context/Context";

class Loading extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.slider = null;
    this.name = null;
    this.loader = null;
  }

  componentDidMount() {
    const { onToggleLoading } = this.context;
    const loading = gsap.timeline({
      onComplete: () => {
        onToggleLoading();
      },
    });
    loading.to(this.loader, {
      opacity: 1,
      autoAlpha: 1,
      duration: 0.1,
    });
    loading.to(this.name, {
      y: "50",
      delay: 1.5,
      duration: 0.7,
      ease: "power1.out",
    });
    loading.to(this.slider, {
      scaleY: 1,
      duration: 0.8,
      ease: "power4.in",
    });
    loading.to(this.loader, {
      opacity: 0,
      duration: 0.1,
      autoAlpha: 0,
    });
  }

  render() {
    return (
      <>
        <Loader ref={this.loader}>
          <Name>
            <NameDiv
              ref={(name) => {
                this.name = name;
              }}
            >
              Harkirat Singh Virdi
            </NameDiv>
          </Name>
          <Slider
            ref={(slider) => {
              this.slider = slider;
            }}
          />
        </Loader>
      </>
    );
  }
}

export default Loading;
