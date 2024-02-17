import { createSlice } from "@reduxjs/toolkit";

const requirSlice = createSlice({
  name: "requir",
  initialState: {
    whatIs: null,
  },
  reducers: {
    getRequir: (state, actions) => {
      state.whatIs = actions.payload;
    },
  },
});

export const { getRequir } = requirSlice.actions;

export default requirSlice.reducer;
