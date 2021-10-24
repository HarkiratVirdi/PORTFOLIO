import { Component } from "react";
import { withRouter } from "react-router-dom";
class ScrollTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (this.props.location.pathname === "/") {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 1450);
      } //   console.log("location", this.props.location);
      if (this.props.location.pathname.includes("/project")) {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 1715);
      }
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollTop);
