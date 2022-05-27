import React, { useState } from "react";
import "./UtilityCardImage.css";

//this component is the image that is displayed on the utility card
//it is a split screen where half the image is where you throw and the other half is where the smoke lands

export default function UtilityCardImage({ img_throw, img_stand, id }) {
  return <img src={img_throw} alt={id} className="UtilityCard-image" />;
}
