import React, { Component } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Loading from "./components/Loading/Loading";
import { Switch, Route } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import GlobalStyle from "./components/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./components/Context/Context";
import Cursor from "./components/Cursor/Cursor";
import ContextLangProvider from "./components/Context/ContextLang";
import Projects from "./components/Projects/Projects";
import { AnimatePresence } from "framer-motion";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";

class App extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      pageWidth: window.innerWidth,
    };
    window.addEventListener("resize", this.onResize);
  }

  componentDidUpdate() {
    const { onToggleLoading, isLoadingDone } = this.context;
    if (isLoadingDone === false) {
      onToggleLoading();
    }
  }

  onResize = () => {
    this.setState({
      ...this.state,
      pageWidth: window.innerWidth,
    });
  };

  render() {
    const { lightTheme, darkTheme, isLightTheme, isLoadingDone } = this.context;

    if (!isLoadingDone) {
      return <Loading />;
    } else {
      return (
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Cursor />
          <ContextLangProvider>
            <Route
              render={({ location }) => (
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <Route
                      exact
                      path="/"
                      render={() => (
                        <>
                          <div className="container">
                            {" "}
                            <Header
                              theme={isLightTheme ? lightTheme : darkTheme}
                            />
                            <Intro
                              theme={isLightTheme ? lightTheme : darkTheme}
                            />
                            <Projects
                              theme={isLightTheme ? lightTheme : darkTheme}
                            />
                          </div>
                        </>
                      )}
                    />
                    <Route
                      exact
                      path="/project/:id"
                      render={() => (
                        <div className="container container_other">
                          {/* <ScrollToTop /> */}
                          <ProjectInfo
                            theme={isLightTheme ? lightTheme : darkTheme}
                          />
                        </div>
                      )}
                    />
                  </Switch>
                </AnimatePresence>
              )}
            />
          </ContextLangProvider>
        </ThemeProvider>
      );
    }
  }
}

export default App;
