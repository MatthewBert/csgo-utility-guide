import React, { useState } from "react";
import "./UtilityPageImage.css";

//this component is the image that is displayed on the utility page
//clicking on the image will cycle through the throw and land location
//TODO: add a video icon in the bottom left, when clicked have a popup for a video demonstation of the utility



export default function UtilityPageImage({
  img_throw,
  img_stand,
  util_land,
  id,
  video,
}) {
  const [isActive1, setActive1] = useState("false");
  const handleToggle1 = () => {
    setActive1(!isActive1);
  };

  const [isActive2, setActive2] = useState("false");
  const handleToggle2 = () => {
    setActive2(!isActive2);
  };

  const [isActive3, setActive3] = useState("false");
  const handleToggle3 = () => {
    setActive3(!isActive3);
  };

  const [isActive4, setActive4] = useState("false");
  const handleToggle4 = () => {
    setActive4(!isActive4);
  };
//START OF RANDOM VIDEO GENERATOR (DELETE WHEN PROPER VIDEOS ARE ADDED)
  var images = [];
  var index = 0;
  images[0] = (
    <iframe
      onClick={handleToggle4}
      src="https://www.youtube.com/embed/hBLl0AMxr7s"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; "
      allowfullscreen
      alt={id}
      className={isActive4 ? "UtilityPageImgGrid" : "UtilityPageImgView"}
    ></iframe>
  );
  images[1] = (
    <iframe
      onClick={handleToggle4}
      src="https://www.youtube.com/embed/FiEzKjycxTw"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; "
      allowfullscreen
      alt={id}
      className={isActive4 ? "UtilityPageImgGrid" : "UtilityPageImgView"}
    ></iframe>
  );
  images[2] = (
    <iframe
      onClick={handleToggle4}
      src="https://www.youtube.com/embed/qFrgdFb0WS0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; "
      allowfullscreen
      alt={id}
      className={isActive4 ? "UtilityPageImgGrid" : "UtilityPageImgView"}
    ></iframe>
  );
  images[3] = (
    <iframe
      onClick={handleToggle4}
      src="https://www.youtube.com/embed/SdH13BXdNqI"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; "
      allowfullscreen
      alt={id}
      className={isActive4 ? "UtilityPageImgGrid" : "UtilityPageImgView"}
    ></iframe>
  );
  images[4] = (
    <iframe
      onClick={handleToggle4}
      src="https://www.youtube.com/embed/N_6XQp08pgM"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; "
      allowfullscreen
      alt={id}
      className={isActive4 ? "UtilityPageImgGrid" : "UtilityPageImgView"}
    ></iframe>
  );
  images[5] = (
    <iframe
      onClick={handleToggle4}
      src="https://www.youtube.com/embed/rP2MDtWu5t0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; "
      allowfullscreen
      alt={id}
      className={isActive4 ? "UtilityPageImgGrid" : "UtilityPageImgView"}
    ></iframe>
  );
  
  index = Math.floor(Math.random() * images.length);
  console.log("VIDEO SELECTED: ",index)
//END OF RANDOM VIDEO GENERATOR
  return (
    <div>
      <div className="parent">
        <img
          onClick={handleToggle1}
          src={img_throw}
          alt={id}
          className={isActive1 ? "UtilityPageImgGrid" : "UtilityPageImgView"}
        />
        <img
          onClick={handleToggle2}
          src={util_land}
          alt={id}
          className={isActive2 ? "UtilityPageImgGrid" : "UtilityPageImgView"}
        />
        <img
          onClick={handleToggle3}
          src={img_stand}
          alt={id}
          className={isActive3 ? "UtilityPageImgGrid" : "UtilityPageImgView"}
        />
        {images[index]}
      </div>
    </div>
  );
}
