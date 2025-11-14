import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "../actions";

const initialState = {
  flightId: null,
  isLoading: false,
  error: null,
  info: null,
  route: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    open: (state, action) => {
      state.flightId = action.payload;
    },
    close: (state) => {
      state.flightId = null;
      state.info = null;
      state.route = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.info = action.payload;
      state.route = action.payload.trail || [];
    });
  },
});

export const { open, close } = detailSlice.actions;
export default detailSlice.reducer;