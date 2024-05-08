import React from 'react';
import MiniMap from './MiniMap';

function Place({ place }) {
    const position = [place.latitude, place.longitude];

    return (
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px", border: "1px solid #ccc", padding: "20px" }}>
            {/* Name */}
            <h2 style={{ marginBottom: "10px" }}>{place.name}</h2>
            
            {/* Content Container */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}>
                {/* Image */}
                <div style={{ flex: 1, marginRight: "20px" }}>
                    <img src={place.imageUrl} alt={`View of ${place.name}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>

                {/* Description */}
                <div style={{ flex: 2, marginRight: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p>{place.description}</p>
                </div>

                {/* Map */}
                <div style={{ flex: 1, minWidth: "200px" }}>
                    <MiniMap position={position} />
                </div>
            </div>
        </div>
    );
}

export default Place;
