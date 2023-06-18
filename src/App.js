import "./App.css";
import React, { useState, useEffect } from "react";
import MapView from "./MapView";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";

const heartIcon = L.icon({
  iconUrl: "leaf-green.png",
  shadowUrl: "leaf-shadow.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function App() {
  const startPoint = [29.637634777707117, 52.525076694299216];
  const endPoint = [29.63448281564615, 52.514053659141794];

  return (
    <div className="App">
      <MapContainer
        center={[29.638194, 52.525549]}
        zoom={13}
        scrollWheelZoom={true}
        style={{
          height: "500px",
          width: "90%",
          margin: "50px 0",
          border: "2px solid #ccc",
          borderRadius: "10px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        <Marker position={startPoint} icon={heartIcon}>
          <Popup>Start Point</Popup>
        </Marker>

        <Marker position={endPoint} icon={heartIcon}>
          <Popup>End Point</Popup>
        </Marker>

        <Polyline positions={[startPoint, endPoint]} color="blue" />
        <MapView startPoint={startPoint} endPoint={endPoint} />
      </MapContainer>
      
    </div>
  );
}

export default App;
