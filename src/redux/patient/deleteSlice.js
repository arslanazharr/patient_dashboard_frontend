/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.BASE_URL;

// Action
export const deletePatient = createAsyncThunk(
  "deletePatient",
  async (params) => {
    try {
      let url = `${BASE_URL}/api/delete/${params.id}`;

      const response = await axios.delete(url);

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      throw error;
    }
  }
);

const deleteSlice = createSlice({
  name: "patients",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(deletePatient.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      })
      .addCase(deletePatient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log("Error", action.error.message);
      });
  },
});

export default deleteSlice.reducer;
