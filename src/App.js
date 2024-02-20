import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import DrawerAppBar from "./components/navbar";
import Entry from "./components/entry";
import Chart from "./components/chart";
import Show from "./components/table";
import Login from "./components/login";
import Home from "./components/home";

function useCurrentRoute() {
  const location = useLocation();
  return location.pathname;
}

function AppContent() {
  const currentRoute = useCurrentRoute();
  const hideNavbarRoutes = ["/", "/login"]; // Add routes where you want to hide the navbar

  return (
    <>
      {!hideNavbarRoutes.includes(currentRoute) && <DrawerAppBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/table" element={<Show />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
