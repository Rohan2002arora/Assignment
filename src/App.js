import "./App.css";
//import { createBrowserRouter, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DrawerAppBar from "./components/navbar";
import Entry from "./components/entry";
import Chart from "./components/chart";
import Show from "./components/table";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <DrawerAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/chart" element={<Chart />} />
        <Route exact path="/entry" element={<Entry />} />
        <Route exact path="/table" element={<Show />} />
      </Routes>
    </Router>
  );
}

export default App;
