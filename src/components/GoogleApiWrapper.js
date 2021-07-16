import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapstyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapstyles}
        initialCenter={{ lat: 6.5244, lng: 3.3792 }}
      />
    );
  }
}

export default GoogleApiWrapper((props) => ({ apiKey: props.apiKey }))(
  MapContainer
);
