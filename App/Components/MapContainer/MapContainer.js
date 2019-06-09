import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import styles from './styles';
import MapCallout from '../MapCallout/MapCallout';

class MapContainer extends Component {
  render() {
    const markers = [
      {
        latitude: 37.837372,
        longitude: -119.515460,
        title: 'Yosemite',
        subtitle: 'National Park'
      }
    ];

    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.837372,
          longitude: -119.515460,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // annotations={this.markers}
      >
        <MapView.Marker
          coordinate={{
            latitude: 37.837372,
            longitude: -119.515460
          }}
          title={"Yosemite"}
          description={"National Park"}
        >
          <Callout tooltip>
            <MapCallout text="Yosemite" subtext="National Park" buttons />
          </Callout>
        </MapView.Marker>
      </MapView>
    );
  }
}

export default MapContainer;
