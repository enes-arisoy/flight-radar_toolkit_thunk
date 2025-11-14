import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flightSlice";
import detailReducer from "./slices/detailSlice";

const store = configureStore({
  reducer: {
    flights: flightReducer,
    details: detailReducer,
  },
});

export default store;
