import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapContainer from '../Components/MapContainer/MapContainer';

class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      error: null,
      pins: null,
      location: null,
    }
  }

  componentDidMount() {
    let hasLocationPermission = true;
    // Instead of navigator.geolocation, just use Geolocation.
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.setState({ location: position });
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }

  createPins = () => {
    if (this.state.password !== this.state.passwordConf) {
      return;
    }
    fetch('http://localhost:8000/api/park', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      return res.json();
    })
    .then(data => {
      this.setState({ data: data });
    })
    .catch((err) => {
      this.setState({ error: err });
    });
  }

  render() {
    return (
      <MapContainer />
    );
  }
}

export default MapScreen;
