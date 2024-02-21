import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
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

function PrivateRoute({ element }) {
  const isAuthenticated = !!localStorage.getItem("session");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
}

function AppContent() {
  const currentRoute = useCurrentRoute();
  const hideNavbarRoutes = ["/", "/login"]; // Add routes where you want to hide the navbar

  return (
    <>
      {!hideNavbarRoutes.includes(currentRoute) && <DrawerAppBar />}
      <Routes>
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/chart" element={<PrivateRoute element={<Chart />} />} />
        <Route path="/entry" element={<PrivateRoute element={<Entry />} />} />
        <Route path="/table" element={<PrivateRoute element={<Show />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
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
