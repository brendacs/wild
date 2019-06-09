import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapContainer from '../Components/MapContainer/MapContainer';
// import console = require('console');

// declare module "console" {
//   export = console;
// }

class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      error: null,
      pins: null,
      currLoc: null,
    }
  }

  componentDidMount() {
    let hasLocationPermission = true;
    // Instead of navigator.geolocation, just use Geolocation.
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.setState({ currLoc: position });
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }

  getContentLength = (s) => {
    return encodeURI(s).split(/%..|./).length - 1;
  }

  // componentDidMount() {
  //   if (this.state.password !== this.state.passwordConf) {
  //     return;
  //   }
  //   fetch('http://localhost:8000/api/park', {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       'Content-Length': this.getContentLength(JSON.stringify({
  //         latitude: 37.787513,
  //         longitude: -122.396286,
  //         parkId: "Yosemite"
  //       }))
  //     },
  //     body: JSON.stringify({
  //       latitude: 37.787513,
  //       longitude: -122.396286,
  //       parkId: "Yosemite"
  //     })
  //   })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     this.setState({ data: data });
  //   })
  //   .catch((err) => {
  //     this.setState({ error: err });
  //   });
  // }

  render() {
    return (
      <MapContainer currLoc={this.state.currLoc} data={this.state.data} />
    );
  }
}

export default MapScreen;
