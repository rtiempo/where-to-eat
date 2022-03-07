import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { MapContainer } from './Map.styles';

const Map = () => {
  const coordinates = { lat: 0, lng: 0 };

  return (
    <MapContainer>
      <GoogleMapReact
        boostrapURLKeys={{ key: 'AIzaSyByv-_4Ed2Wa5MiMNCY8cKmKovEJfQNCl8' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      ></GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
