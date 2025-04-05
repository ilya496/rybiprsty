import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface EventMapProps {
  position: [number, number]; // [latitude, longitude]
  label: string;
}

function EventMap({ position, label }: EventMapProps) {
  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className="event__map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={position}>
        <Popup>{label}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default EventMap;
