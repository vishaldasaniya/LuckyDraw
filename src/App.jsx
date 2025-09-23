// import React from 'react'
// import Home from "./components/Home.jsx";
// import Qrscan from "./components/Qrscan.jsx"
// export default function App() {
//   return (
//     <div>
//     <Home/>
//     <Qrscan/>
//     </div>
//   )
// }
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ScanScreen from "./components/ScanScreen";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/scan" element={<ScanScreen />} />
      </Routes>
    </Router>
  );
}
