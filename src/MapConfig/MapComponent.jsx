import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';

const SearchField = () => {
    const map = useMap();
  
    useEffect(() => {
      const provider = new OpenStreetMapProvider({
        params: {
          countrycodes: 'CO', // Limita las búsquedas a Colombia
          'accept-language': 'es', // Resultados en español
          addressdetails: 1, // Incluye detalles de la dirección
          email: 'tu-correo@example.com' // Recomendado para identificar tus solicitudes
        }
      });
  
      const searchControl = new GeoSearchControl({
        provider,
        style: 'bar',
        showMarker: false,
        showPopup: false,
        autoClose: true,
        retainZoomLevel: false,
        animateZoom: true,
        keepResult: false,
        searchLabel: 'Buscar lugar...'
      });
  
      map.addControl(searchControl);
  
      return () => map.removeControl(searchControl);
    }, [map]);
  
    return null;
  };
  

const MapComponent = ({ onLocationSelect }) => {
  const [position, setPosition] = useState(null);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
        onLocationSelect(e.latlng);
      },
    });
    return null;
  };

  return (
    <MapContainer center={[4.8143, -75.6946]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SearchField />
      <MapClickHandler />
      {position && <Marker position={position} />}
    </MapContainer>
  );
};

export default MapComponent;
