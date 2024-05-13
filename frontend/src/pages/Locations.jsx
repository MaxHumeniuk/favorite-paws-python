import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import MapIcon from "../assets/map-icon.png";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ReactStars from "react-rating-stars-component";

export default function Locations() {
  const [places, setPlaces] = useState([]);
  const [visibleMapId, setVisibleMapId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:5000/api/places')
      .then(response => setPlaces(response.data))
      .catch(error => console.error('Error fetching places:', error));
  }, []);

  const toggleMap = (id) => {
    setVisibleMapId(visibleMapId === id ? null : id);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-12 py-12">
      <form className="flex justify-center items-center"> {/* Додано клас 'items-center' */}
        <input
          type="text"
          placeholder="Введіть назву закладу..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ outlineColor: 'white' }}
          className="mb-4 p-2 rounded w-1/2 shadow-lg"
        />
      </form>
      {filteredPlaces.map(place => (
        <div key={place.id} className="shadow-2xl mb-6 p-2 bg-gradient-to-bl from-[#ffcc7f] from-15% to-[#d9ab7c] to-1% rounded-xl transition-transform duration-100 hover:scale-105">
          <div className="flex items-center justify-between">
            <img src={place.imageUrl} alt={place.name} className="w-64 h-64 mr-8 rounded-md" />
            <button onClick={() => toggleMap(place.id)}>
              <img src={MapIcon} alt="Map icon" className="w-14 h-14 cursor-pointer" />
            </button>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{place.name}</h3>
            <p>{place.description}</p>
            <ReactStars
              count={5}
              value={place.rating}
              size={24}
              activeColor="#ffd700"
              isHalf={true}
              edit={false}
            />
            {visibleMapId === place.id && (
              <div className="map-container">
                <MapContainer center={[place.latitude, place.longitude]} zoom={13} scrollWheelZoom={false} className="h-80 w-full mt-4" style={{ zIndex: 1 }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[place.latitude, place.longitude]}>
                    <Popup>{place.name}</Popup>
                  </Marker>
                </MapContainer>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}