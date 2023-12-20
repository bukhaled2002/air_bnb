import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../config/Api";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/users/user");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllUsesrData = createAsyncThunk(
  "user/fetchAllUsesrData",
  async (_, thunkAPI) => {
    try {
      const response = await Api.get("/users/all");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
    all:[],
    online: false,
  },
  reducers: {
    onlineUser: (state, action) => {
      state.online = true;
    },
    setData: (state, action) => {
      state.data = action.payload  
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.online = true
      state.data = action.payload;
    });
    builder.addCase(fetchAllUsesrData.fulfilled, (state, action) => {
      state.all = action.payload;
    });
  },
});

export const {onlineUser,setData} = userSlice.actions;
export default userSlice.reducer;
