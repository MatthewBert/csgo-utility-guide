import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./AppStyles.css";
import MapList from "./MapList";
import UtilityList from "./UtilityList";
import Navbar from "./Navbar";
import UtilityPage from "./UtilityPage";
import background from "./img/icons/background2.jpeg";

function App() {
  return (
<div style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + background})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundAttachment: 'fixed',
  minHeight: '59.188rem'
}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MapList />} />
          <Route exact path="/map/:mapName" element={<UtilityList />} />
          <Route exact path="/utility/:utilityName" element={<UtilityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
