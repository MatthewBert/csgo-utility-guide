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
  const [isActive, setActive] = useState("false");
  const posIndex = 1;
  const negIndex = -1;

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className="parent" onClick={handleToggle}>
        <img
          src={img_throw}
          alt={id}
          className={isActive ? "UtilityPageImg1" : "UtilityPageImg2"}
          style={isActive ? { zIndex: negIndex } : { zIndex: posIndex }}
        />
        <img
          src="https://media.discordapp.net/attachments/314196129694613504/774726039494459412/sktugffqhtx51.png?width=896&height=672"
          alt={id}
          className={isActive ? "UtilityPageImg2" : "UtilityPageImg1"}
          style={isActive ? { zIndex: posIndex } : { zIndex: negIndex }}
        />
      </div>
      <div className="parent2">
        <img src={util_land} className="UtilityPageImgExtra" />
      </div>
    </div>
  );
}
