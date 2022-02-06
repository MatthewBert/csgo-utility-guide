import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { useLocation } from "react-router-dom";
import "./UtilityPage.css";

function UtilityPage() {
  const location = useLocation();
  const crosshair = `.prefix__st0{fill:#fff;stroke:#000;stroke-miterlimit:10}`;
  console.log(location);
  const {
    map,
    mapTitle,
    type,
    start_location,
    land_location,
    movement,
    img_throw,
    img_stand,
    video,
    description,
    id,
  } = location.state;

  return (
    <Container maxWidth="lg">
      <div className="UtilityPage">
        <h1>
          {mapTitle} {land_location} {type}
        </h1>
        <div className="UtilityPage-content">
          <p>
            The {type} is thrown from {start_location} and lands at{" "}
            {land_location}
          </p>
          <p>
            This {type} requires a {movement}
          </p>
        </div>
        {/*TODO: Fix the crosshair in the middle of the picture... EXAMPLE: https://www.csgonades.com/nades/ancient-a-main-smoke-2*/}
        
        <img src={img_throw} alt={id} className="UtilityPageImg" />
        <div className="crosshair">
          <svg width={43} height={44} viewBox="0 0 43 44">
            <style>{crosshair}</style>
            <path
              class="prefix_st0"
              d="M19.5 27.5h4v16h-4zM19.5.5h4v16h-4zM16.5 20v4H.5v-4zM42.5 20v4h-16v-4z"
            ></path>
          </svg>
        </div>
        <h1 className="UtilityPage-description">DESCRIPTION: {description}</h1>
      </div>
    </Container>
  );
}

export default UtilityPage;
