import { Routes, Route, Navigate } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./screens/dashboard/Dashboard";
import Error from "./components/Error";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B73A3",
    },
  },
});

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

function AppContent() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />

      <Header />

      <main className={` sm:p-[32px] p-[20px] !bg-[#FCFCFD]`}>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
