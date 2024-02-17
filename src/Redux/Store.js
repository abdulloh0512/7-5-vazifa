import { configureStore } from "@reduxjs/toolkit";
import requir from "./requir";

const store = configureStore({
  reducer: {
    Require: requir,
  },
});

export default store;
