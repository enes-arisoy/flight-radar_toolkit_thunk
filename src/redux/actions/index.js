import { createAsyncThunk } from "@reduxjs/toolkit";
import { params } from "../../utils/constants";
import api from "../../utils/api";

// tr üzerindeki uçuşları alan asenkron aksiyon
const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // api isteğini at
  const res = await api.get("/list-in-boundary", { params });

  // api den gelen veriyi formatla
  // dizi içindeki dizileri nesneye çevir
  const formatted = res.data?.aircraft.map((i) => ({
    flightId: i[0],
    callsign: i[1],
    lat: i[2],
    lon: i[3],
    track: i[4],
  }));

  // aksiyonun payloadı
  return formatted;
});

// bir uçuşun detay verilerini alan asenkron aksiyon
const getDetails = createAsyncThunk("/flights/detail", async (flightId) => {
  // api isteğini at
  const res = await api.get(`/detail?flight=${flightId}`);

  // aksiyonun payloadı
  return res.data;
  
});
export { getFlights, getDetails };
