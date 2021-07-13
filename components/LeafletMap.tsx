import L from "leaflet";
import { useContext } from "react";
import { MapContainer, TileLayer, Marker, MapConsumer } from "react-leaflet";

import AddressInfoContext from "../context/AddressInfoContext";

const icon = L.icon({
  iconUrl: "/icon-location.svg",
  iconSize: [45, 55],
  iconAnchor: [22.5, 55],
});

const LeafletMap = () => {
  const { data } = useContext(AddressInfoContext);
  const { location } = data;
  const { lat, lng } = location;

  return (
    <MapContainer
      className="addy-tracker-map"
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={icon} />
      <MapConsumer>
        {(map) => {
          map.panTo([lat, lng]);
          return null;
        }}
      </MapConsumer>
    </MapContainer>
  );
};

export default LeafletMap;
