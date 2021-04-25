import React, { Component } from "react";
import { Link } from "react-router-dom";

class home extends Component {
  render() {
    return (
      <div className="App">
        <h1 class="corner">Add our header here</h1>
        <h2 class="corner">UW SWE Hackathon 2021</h2>
        <h2 class="corner">Our names here</h2>
        <div class="oval">
          <h1>Can I...?</h1>
          <br/><br/><hr/>
          <h4>
            A tool for understanding risk levels during the COVID-19
            pandemic.
          </h4>
          <hr/>
          <br/><br/><br/><br/><br/><br/>
          <button class="btn">
            <Link to={{ pathname: "/input" }}>Get Started</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default home;
