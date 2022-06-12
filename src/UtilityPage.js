import { Button, Container, Grid } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { Component, useState } from "react";
import { useLocation } from "react-router-dom";
import UtilityPageImage from "./UtilityPageImage";
import "./UtilityPage.css";

function UtilityPage() {
  const location = useLocation();
  const crosshair = `.prefix__st0{fill:#fff;stroke:#000;stroke-miterlimit:10}`;
  const {
    map,
    mapTitle,
    type,
    icon,
    side,
    start_location,
    land_location,
    movement,
    technique,
    img_throw,
    img_stand,
    util_land,
    video,
    description,
    id,
  } = location.state;
  const media = { img_throw, img_stand, video };
  const ImageSelector = () => {
    const [selectedMedia, setSelectedMedia] = useState(media.img_throw);
    return (
      <div>
        <UtilityPageImage
          img_throw={img_throw}
          img_stand={img_stand}
          util_land={util_land}
          id={id}
          video={video}
        />
      </div>
    );
  };

  //Resource
  //https://stackoverflow.com/questions/61263669/does-material-ui-have-an-image-component

  return (
    <div className="UtilityPage">
      <div className="ImageHeader">
        <div className="ImageHeaderText" style={{borderLeftWidth: "0.125rem"}}>
          <p className="HeaderText">Type</p>
          <p className="SubtitleText">{type}</p>
        </div>
        <div className="ImageHeaderText">
          <p className="HeaderText">Movement</p>
          <p className="SubtitleText">{movement}</p>
        </div>
        <div className="ImageHeaderText">
          <p className="HeaderText">Technique</p>
          <p className="SubtitleText">{technique}</p>
        </div>
        <div className="ImageHeaderText" style={{borderRightWidth: "0.125rem"}}>
          <p className="HeaderText">Side</p>
          <p className="SubtitleText">{side}</p>
        </div>
      </div>
      <ImageSelector/>
    </div>
  );
}

// OLD UtilityPage May 30
{
  /* <div className="UtilityPage">
  <div>
    <div className="ImageHeader">
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <div className="ImageHeaderText">
            <p>
              <b>Type</b>
            </p>
            <p>{type}</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="ImageHeaderText">
            <p>
              <b>Movement</b>
            </p>
            <p>{movement}</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="ImageHeaderText">
            <p>
              <b>Technique</b>
            </p>
            <p>{technique}</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="ImageHeaderText">
            <p>
              <b>Side</b>
            </p>
            <p>{side}</p>
          </div>
        </Grid>
      </Grid>
    </div>
    <ImageSelector />
    <div className="UtilityPage-description">
      <h3>Description</h3>
      <br/>
      <p>This {type} is for the {side} side. It is thrown from {start_location} and will land at {land_location}. For this {type} you should be {movement} and use a {technique}.</p>
      <p>{description}</p>
    </div>
  </div>
</div> */
}
export default UtilityPage;
