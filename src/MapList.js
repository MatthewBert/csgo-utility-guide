import React, { Component } from "react";
import MapCard from "./MapCard";
import seedMaps from "./seedData/seedMaps";
import { Grid } from "@material-ui/core";

export class MapList extends Component {
  render() {
    console.log("MapList");
    return (
      <div>
        <Grid container>
          <div className="container">
            {seedMaps.map((maps) => {
              return <MapCard {...maps} key={maps.id} />;
            })}
          </div>
        </Grid>
      </div>
    );
  }
}

export default MapList;
