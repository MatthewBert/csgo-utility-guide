import React, { Component } from "react";
import { Link } from "react-router-dom";
import UtilityCardImage from "./UtilityCardImage";
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
            <UtilityCardImage
              img_throw={img_throw}
              img_stand={img_stand}
              util_land={util_land}
              id={id}
            />
            <h1 className="UtilityCard-info">
              {land_location} {type} from {start_location}
              <img className="Icon-image" src={icon} />
            </h1>
          </div>
        </div>
      </Link>
    );
  }
}

export default UtilityCard;
