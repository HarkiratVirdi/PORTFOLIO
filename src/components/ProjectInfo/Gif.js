import React, { Component } from "react";

class Gif extends Component {
  render() {
    return (
      <aside className="p-0">
        <img className="gif" alt={this.props.gif} src={this.props.gif} />
      </aside>
    );
  }
}

export default Gif;
