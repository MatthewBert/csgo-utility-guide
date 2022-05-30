import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UtilityCard.css";

export class UtilityCard extends Component {
  render() {
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
    } = this.props;
    const UtilityURL = "/utility/" + id;
    return (
      <Link
        className="UtilityCard-link"
        to={UtilityURL}
        state={{
          map: map,
          mapTitle: mapTitle,
          type: type,
          icon: icon,
          side: side,
          start_location: start_location,
          land_location: land_location,
          movement: movement,
          technique: technique,
          img_throw: img_throw,
          img_stand: img_stand,
          util_land: util_land,
          video: video,
          description: description,
          id: id,
        }}
      >
        <div>
          <div className="UtilityCard">
            <img className="Icon-image" alt={type} src={icon} />
            <div className="gallery__images">
              <img src={img_throw} alt={id} className="UtilityCard-image-pov" />
              <div className="UtilityCard-image-land-container">
                <img
                  src={util_land}
                  alt={id}
                  className="UtilityCard-image-land"
                />
              </div>
            </div>
            {/* <div className="UtilityCard-image-left">
            </div>
            <div className="UtilityCard-image-right">
            </div> */}
          </div>
          <div className="UtilityCard-info">
            <p className="Header">
              {land_location} {type}
            </p>
            <p className="Subtitle">from {start_location}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default UtilityCard;
