import React, { Component } from "react";
import styled from "styled-components";

const CursorCustom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: transparent;
  border: 1.5px solid ${(props) => props.theme.syntax};
  transform: translate(-50%, -50%);
  pointer-events: none;
  transform-origin: 150% 150%;
  z-index: 999;

  @media (max-width: 1140px) {
    transition: none;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

class Cursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mousePosition: { x: 400, y: 400 },
      bodyTop: { y: 0 },
      isScrolling: false,
      isExpanded: false,
    };
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("scroll", this.scrollTop);
  }

  onMouseMove = (e) => {
    const { pageX: x, pageY: y } = e;
    let scrollingTop = e.srcElement.ownerDocument.scrollingElement.scrollTop;
    this.setState({
      ...this.state,
      mousePosition: { x, y },
      bodyTop: { y: scrollingTop },
      isScrolling: false,
    });
  };

  scrollTop = (e) => {
    this.setState({ ...this.state, isScrolling: true });
    let scrollingTop = e.target.documentElement.scrollTop;
    if (!this.state.isScrolling) {
      this.setState({ ...this.state, bodyTop: { y: scrollingTop } });
    }
  };

  render() {
    return (
      <>
        <CursorCustom
          style={{
            left: `${this.state.mousePosition.x}px`,
            top: `${this.state.mousePosition.y - this.state.bodyTop.y}px`,
          }}
        />
      </>
    );
  }
}

export default Cursor;
