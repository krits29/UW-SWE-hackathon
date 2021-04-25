import React, { Component } from "react";
import { Link } from "react-router-dom";

class results extends Component {
  render() {
    return (
      <div className="App">
        <h1>RESULTS</h1>
        <div class="oval">
          <h2>Can I go walking</h2>
          <button class="btn">
            <Link to={{ pathname: "/" }}>back home</Link>
          </button>
        </div>
        <h2>A tool for risk levels during the COVID-19 pandemic.</h2>
      </div>
    );
  }
}

export default results;
