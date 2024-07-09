/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// eslint-disable-next-line no-undef
const BASE_URL = process.env.BASE_URL;

// Action
export const getSummary = createAsyncThunk("getSummary", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/summary`);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
});

const getSlice = createSlice({
  name: "getSummary",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getSummary.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSummary.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getSummary.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default getSlice.reducer;
