
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Admin from "./components/Admin"
import AdminDashboard from "./components/AdminDashboard"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element ={<Admin/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/" element={<HomeScreen />} />
     
      </Routes>
    </Router>
  );
}
