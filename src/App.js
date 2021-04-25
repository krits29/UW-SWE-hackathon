import "./styles.css";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import home from "./home.js";
import results from "./results.js";
import input from "./input.js";
import "./phone.html";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={home} />
          <Route path="/results" exact component={results} />
          <Route path="/input" exact component={input} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
