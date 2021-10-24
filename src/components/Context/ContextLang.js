import React, { Component, createContext } from "react";

export const ContextLang = createContext();

class ContextLangProvider extends Component {
  state = { isEnglish: true };

  toggleLang = () => {
    this.setState({ isEnglish: !this.state.isEnglish });
  };

  render() {
    return (
      <ContextLang.Provider
        value={{ ...this.state, toggleLang: this.toggleLang }}
      >
        {this.props.children}
      </ContextLang.Provider>
    );
  }
}

export default ContextLangProvider;
