import React, { useState , useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

function MapView(props) {

  const { startPoint, endPoint } = props;

  useEffect(() => {

     // console.log("startPoint, endPoint",startPoint, endPoint)
    const map = L.map('map');
    map.setView([startPoint[0], startPoint[1]], 13);

    const tileLayerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayer = L.tileLayer(tileLayerUrl, {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    });
    tileLayer.addTo(map);

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(startPoint[0], startPoint[1]),
        L.latLng(endPoint[0], endPoint[1]),
      ],
      lineOptions: {
        styles: [{ color: '#6FA1EC', weight: 4 }]
      },
      router: L.Routing.osrmv1({
        serviceUrl: 'http://router.project-osrm.org/route/v1'
      })
    });

    routingControl.addTo(map);
  }, [startPoint, endPoint]);

  return <div id="map" style={{ height: '100vh' }} />
}

export default MapView;