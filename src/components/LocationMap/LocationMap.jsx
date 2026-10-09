import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import { useEffect } from "react";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


// ==========================================
// LEAFLET MARKER ICON
// ==========================================

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;


// ==========================================
// DEFAULT MAP CENTER
// ==========================================

const defaultCenter = [
  15.4875551,
  120.9990373,
];


// ==========================================
// MAP CONTROLLER
// ==========================================

function MapController({ selectedLocation }) {

  const map = useMap();

  useEffect(() => {

    if (!selectedLocation) {
      return;
    }

    map.flyTo(
      [
        selectedLocation.latitude,
        selectedLocation.longitude,
      ],
      15,
      {
        duration: 1,
      }
    );

  }, [selectedLocation, map]);

  return null;
}


// ==========================================
// LOCATION MAP
// ==========================================

export function LocationMap({
  locations,
  selectedLocation,
  onSelectLocation,
}) {

  return (
    <MapContainer
      center={defaultCenter}
      zoom={11}
      scrollWheelZoom={true}
      className="location-map"
    >

      {/* ====================================
          OPEN STREET MAP
      ==================================== */}

      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


      {/* ====================================
          MAP CONTROLLER
      ==================================== */}

      <MapController
        selectedLocation={selectedLocation}
      />


      {/* ====================================
          LOCATION MARKERS
      ==================================== */}

      {locations.map((location) => (

        <Marker
          key={location.id}
          position={[
            location.latitude,
            location.longitude,
          ]}
          eventHandlers={{
            click: () => {
              onSelectLocation(location);
            },
          }}
        >

      <Popup maxWidth={350}>

        <div className="map-popup">

          <h3>
            {location.name}
          </h3>

          <p>
            {location.address}
          </p>

          {/* Embedded Google Map */}

          <div className="popup-map">

            <iframe
              title={`Map of ${location.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                location.address
              )}&output=embed`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>


          {/* Google Maps Button */}

          <a
            href={location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="popup-google-maps"
          >
            Open in Google Maps
          </a>

        </div>

      </Popup>

        </Marker>

      ))}

    </MapContainer>
  );
}