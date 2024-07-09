/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.BASE_URL;

// Action
export const getPatients = createAsyncThunk("getPatients", async (params) => {
  try {
    let url = `${BASE_URL}/api/patients`;

    if (params.name) {
      url += `/${params.name}`;
    }

    if (params.status) {
      url += `/status/${params.status}`;
    }

    if (params.order) {
      url += `/sort/${params.order}`;
    }

    const response = await axios.get(url);

    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error; // Make sure to rethrow the error to propagate it
  }
});

const getSlice = createSlice({
  name: "patients",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPatients.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false; // Reset error state
      })
      .addCase(getPatients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false; // Reset error state
      })
      .addCase(getPatients.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log("Error", action.error.message); // Log the error message
      });
  },
});

export default getSlice.reducer;
