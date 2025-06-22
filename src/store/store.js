import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main";

const store  = configureStore({
  reducer: combineReducers({main: mainReducer})
})

export default store;