import React from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MiniMap({ position }) {
    function ClickableMap() {
        const map = useMapEvents({
            click: () => {
                map.setView(position, map.getZoom() + 1); 
            },
        });

        return null;
    }

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: 200, width: "100%", cursor: 'pointer' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} />
            <ClickableMap />
        </MapContainer>
    );
}

export default MiniMap;
