import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UtilityCard.css";

export class UtilityCard extends Component {
  render() {
    
    const {
      map,
      type,
      start_location,
      land_location,
      movement,
      img,
      video,
      description,
      id,
    } = this.props;
    const UtilityURL = "/utility/" + id;
    return (
      <Link
        className="UtilityCard-link"
        to={{
          pathname: UtilityURL,
          state: {
            map,
            type,
            start_location,
            land_location,
            movement,
            img,
            video,
            description,
            id,
          },
        }}
      >
        <div className="UtilityCard">
          <img className="UtilityCard-image" src={img} alt={id} />
          <h1 className="UtilityCard-info">
            {land_location} {type} from {start_location}
          </h1>
        </div>
      </Link>
    );
  }
}

export default UtilityCard;
