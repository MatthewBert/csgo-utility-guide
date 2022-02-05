import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./AppStyles.css";
import MapList from "./MapList";
import UtilityList from "./UtilityList";
import Navbar from "./Navbar";
import UtilityPage from "./UtilityPage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<MapList/>} />
          <Route exact path="/map/:mapName" element={<UtilityList/>}/>
          <Route exact path="/utility/:utilityName" element={<UtilityPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
