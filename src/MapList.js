import React, { Component } from "react";
import MapCard from "./MapCard";
import Container from "@material-ui/core/Container";
import seedMaps from "./seedData/seedMaps";

export class MapList extends Component {
  render() {
    console.log("MapList")
    return (
      <div>
        <Container maxWidth="lg">
          <div className="container">
            {seedMaps.map((maps) => {
              return <MapCard {...maps} key={maps.id}/>;
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default MapList;
