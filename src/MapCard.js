import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MapCard.css";

export class MapCard extends Component {
  render() {
    const { mapName, img, id } = this.props;
    return (
        <Link className="MapCard-link" to={`/map/${id}`}>
          <div className="MapCard">
            <img className="MapCard-image" src={img} alt={id} />
            <h1 className="MapCard-info">{mapName}</h1>
          </div>
        </Link>
    );
  }
}

export default MapCard;
