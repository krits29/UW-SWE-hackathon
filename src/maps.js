import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from "react-router-dom"; 

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 47.6,
      lng: -122.4
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div class="oval">
      <h1 class="corner maphead">Map for 98498</h1>
      <div style={{ height: '50%', width: '105%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCUo_wwDX6odV9bY-CSNmWa_37-urVIhEw "}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={47.6}
            lng={122.4}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      <br/>
      <div class="cases">Number of cases nearby: </div>
      <button class="btn">
            <Link to={{ pathname: "/" }}>Return Home</Link>
          </button>
      </div>
    );
  }
}
 
export default SimpleMap;
