import { configureStore } from "@reduxjs/toolkit";
import getSummary from "./summary/getSlice";
import getPatients from "./patient/getSlice";
import deletePatient from "./patient/deleteSlice";

export const store = configureStore({
  reducer: {
    summary: getSummary,
    patients: getPatients,
    deletePatient,
  },
});
