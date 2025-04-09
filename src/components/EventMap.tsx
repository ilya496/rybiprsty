import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface EventMapProps {
  position: [number, number]; // [latitude, longitude]
  label: string;
}

function EventMap({ position, label }: EventMapProps) {
  const apiKey = "JA8ynOpU_GgqI0mmgQuGW2mV9M7i6Jv_HLVe3BlfmAo";

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className="event__map"
    >
      <TileLayer
        url={`https://api.mapy.cz/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${apiKey}`}
        attribution='<a href="https://api.mapy.cz/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>'
      />
      <Marker position={position}>
        <Popup>{label}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default EventMap;
