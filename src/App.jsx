
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Admin from "./components/Admin"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element ={<Admin/>}/>
        <Route path="/" element={<HomeScreen />} />
     
      </Routes>
    </Router>
  );
}
