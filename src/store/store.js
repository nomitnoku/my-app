import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main";

const store  = configureStore({
  reducer: mainReducer
})

export default store;