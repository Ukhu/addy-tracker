import L, { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const position: LatLngExpression = [51.556, -0.2796];

const icon = L.icon({
  iconUrl: "/icon-location.svg",
  iconSize: [45, 55],
  iconAnchor: [22.5, 55],
});

const LeafletMap = () => {
  return (
    <MapContainer
      className="addy-tracker-map"
      center={position}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon} />
    </MapContainer>
  );
};

export default LeafletMap;
