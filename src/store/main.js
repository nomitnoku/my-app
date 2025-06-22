import { createSlice } from "@reduxjs/toolkit";
import AppJson from "../app.json";

const initialState = {
  navItems: AppJson.nav_items,
  products: AppJson.products
}

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {

  }
})

export default mainSlice.reducer;