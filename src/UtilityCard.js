import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UtilityCard.css";

export class UtilityCard extends Component {
  render() {
    const {
      map,
      mapTitle,
      type,
      side,
      start_location,
      land_location,
      movement,
      technique,
      img_throw,
      img_stand,
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
          side: side,
          start_location: start_location,
          land_location: land_location,
          movement: movement,
          technique: technique,
          img_throw: img_throw,
          img_stand: img_stand,
          video: video,
          description: description,
          id: id,
        }}
      >
        <div className="UtilityCard">
          <img className="UtilityCard-image" src={img_throw} alt={id} />
          <h1 className="UtilityCard-info">
            {land_location} {type} from {start_location}
          </h1>
        </div>
      </Link>
    );
  }
}

export default UtilityCard;
