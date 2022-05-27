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
        <UtilityPageImage img_throw={img_throw} img_stand={img_stand} util_land={util_land} id={id} video={video}/>
      </div>
      // <div className="BackgroundColor">
      //   <div className="ImageButtons">
      //     <Button
      //       variant="contained"
      //       onClick={() => setSelectedMedia(media.img_throw)}
      //     >
      //       Where to Throw
      //     </Button>
      //     <Button
      //       variant="contained"
      //       onClick={() => setSelectedMedia(media.img_stand)}
      //     >
      //       Where to Stand
      //     </Button>
      //     <Button
      //       variant="contained"
      //       onClick={() => setSelectedMedia(media.video)}
      //     >
      //       Video
      //     </Button>
      //   </div>
      //   <img src={selectedMedia} alt={id} className="UtilityPageImg" />
      // </div>
    );
  };

  //Resource
  //https://stackoverflow.com/questions/61263669/does-material-ui-have-an-image-component

  return (
    <Container>
      <div className="UtilityPage">
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
          {/*TODO: make the svg aline with the image */}
          {/* <div className="crosshair">
            <svg width={43} height={44} viewBox="0 0 43 44">
            <style>{crosshair}</style>
            <path
            className="CHstyle"
            d="M19.5 27.5h4v16h-4zM19.5.5h4v16h-4zM16.5 20v4H.5v-4zM42.5 20v4h-16v-4z"
            ></path>
            </svg>
          </div> */}
          <ImageSelector />
          <div className="UtilityPage-description">
            <h3>Description</h3>
            <br/>
            <p>This {type} is for the {side} side. It is thrown from {start_location} and will land at {land_location}. For this {type} you should be {movement} and use a {technique}.</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Container>

    // <Container maxWidth="lg">
    //   <div className="UtilityPage">
    //     <h1>
    //       {mapTitle} {land_location} {type}
    //     </h1>
    //     <div className="UtilityPage-content">
    //       <p>
    //         The {type} is thrown from {start_location} and lands at{" "}
    //         {land_location}
    //       </p>
    //       <p>
    //         This {type} requires a {movement}
    //       </p>
    //     </div>
    //     {/*TODO: Fix the crosshair in the middle of the picture... EXAMPLE: https://www.csgonades.com/nades/ancient-a-main-smoke-2*/}

    //     <img src={img_throw} alt={id} className="UtilityPageImg" />
    //     <div className="crosshair">
    //       <svg width={43} height={44} viewBox="0 0 43 44">
    //         <style>{crosshair}</style>
    //         <path
    //           class="prefix_st0"
    //           d="M19.5 27.5h4v16h-4zM19.5.5h4v16h-4zM16.5 20v4H.5v-4zM42.5 20v4h-16v-4z"
    //         ></path>
    //       </svg>
    //     </div>
    //     <h1 className="UtilityPage-description">DESCRIPTION: {description}</h1>
    //   </div>
    // </Container>
  );
}

export default UtilityPage;
