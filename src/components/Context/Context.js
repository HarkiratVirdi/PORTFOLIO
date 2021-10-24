import React, { createContext, Component } from "react";
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme:
      localStorage.getItem("theme") === null
        ? true
        : localStorage.getItem("theme"),
    darkTheme: { ui: "#262626", background: "#000", syntax: "#fff" },
    lightTheme: { ui: "#fff", background: "#eee", syntax: "#131313" },
    isLoadingDone: false,
  };

  onToggleTheme = () => {
    this.setState({
      ...this.state,
      isLightTheme: !this.state.isLightTheme,
    });
    localStorage.setItem("theme", !this.state.isLightTheme);
  };

  onToggleLoading = () => {
    this.setState({ ...this.state, isLoadingDone: true });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          toggleTheme: this.onToggleTheme,
          onToggleLoading: this.onToggleLoading,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
