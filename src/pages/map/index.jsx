import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { getIcon } from "./../../utils/getIcons";
import { open } from "../../redux/slices/detailSlice";
import { getFlights } from "../../redux/actions";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flights);
  const { info, route } = useSelector((store) => store.details);

  // gerçek zamanlı veri akışı
  useEffect(() => {
    const id = setInterval(() => {
      dispatch(getFlights());
    }, 30000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <MapContainer
      center={[39.920105, 32.901662]}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight, key) => (
        <Marker
          key={key}
          position={[flight?.lat, flight?.lon]}
          icon={getIcon(
            flight?.track,
            info?.identification?.id === flight?.flightId,
            info?.identification?.id
          )}
        >
          <Popup>
            <div className="popup">
              <span className="text-bold">Code: {flight?.callsign} </span>
              <button
                onClick={() => {
                  dispatch(open(flight?.flightId));
                }}
              >
                Detail
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
      // uçaçğın rotasını çiz
      {route.length > 0 && <Polyline positions={route} />}
      // kalkış noktası verileri
      {info?.airport?.origin?.position && (
        <Marker
          position={[
            info?.airport?.origin?.position?.latitude,
            info?.airport?.origin?.position?.longitude,
          ]}
        >
          <Popup>
            <div className="popup">
              <h3>Departure</h3>
              <span>{info?.airport?.origin?.name}</span>
              <div className="position">
                <span>{info?.airport?.origin?.position?.country?.name}</span> /
                <span>{info?.airport?.origin?.position?.region?.city}</span>
              </div>
            </div>
          </Popup>
        </Marker>
      )}
      // iniş noktası verileri
      {info?.airport?.origin?.position && (
        <Marker
          position={[
            info?.airport?.destination?.position?.latitude,
            info?.airport?.destination?.position?.longitude,
          ]}
        >
          <Popup>
            <div className="popup">
              <span className="title">Arrival</span>
              <span>{info?.airport?.destination.name}</span>
              <div className="position">
                <span>{info?.airport?.destination?.position?.country?.name}</span>
                /<span>{info?.airport?.destination?.position?.region?.city}</span>
              </div>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
