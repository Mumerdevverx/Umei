import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dishwasher from "./components/Dishwasher";
import NewPage from "./components/NewPage"; 
import Students from "./components/Students";
import { Card } from "./components/Card";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dishwasher />} />
        <Route path="/Page" element={<NewPage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/Card" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
