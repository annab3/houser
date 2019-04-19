import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Header from "./Components/Header/Header";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <div>{routes}</div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
