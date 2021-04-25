import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "semantic-ui-react";

class input extends Component {
  state = {
    eatOut: false,
    friends: false,
    shop: false
  };

  render() {
    const { eatOut, friends, shop } = this.state;
    return (
      <div className="App">
        <div class="oval">
          <h1>Can I...?</h1>
          <hr/>
          <h4>Enter Zip Code</h4>
          <input class="textbox" type="text" />
          <h6>I would like to...</h6>
          <Checkbox checked={eatOut} id="eat" label="Eat Out" type="checkbox" />
          <Checkbox
            checked={friends}
            id="friends"
            label="Hang out with Friends"
            type="checkbox"
          />
          <Checkbox
            checked={eatOut}
            id="shop"
            label="Grocery Shop"
            type="checkbox"
          />
          <br/>
          <button class="btn">
            <Link to={{ pathname: "/results" }}>Get Results</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default input;
