import { configureStore, createSlice } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import placesSlice from "./slices/placesSlice";

export const store = configureStore({  
reducer:{
  places:placesSlice,
  user:userSlice
}
});
