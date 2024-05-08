import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current = L.map('map').setView([location.lat, location.lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);
    L.marker([location.lat, location.lng]).addTo(mapRef.current);
    return () => mapRef.current.remove();
  }, [location]);

  return <div id="map" style={{ height: '200px', width: '100%' }}></div>;
};

export default Map;
