import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../config/Api";
import DUMMY_DATA from "../data";

export const fetchPlaces = createAsyncThunk(
  "user/fetchPlaces",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/places");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const placesSlice = createSlice({
  name: "places",
  initialState: {
    data: [],
    online: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      state.data = action.payload?.places;
    });
  },
});

export const {} = placesSlice.actions;
export default placesSlice.reducer;
