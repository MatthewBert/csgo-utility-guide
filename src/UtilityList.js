import React, { Component } from "react";
import UtilityCard from "./UtilityCard";
import Container from "@material-ui/core/Container";
import seedUtilityDust2 from "./seedData/seedUtilityDust2";
import seedUtilityVertigo from "./seedData/seedUtilityVertigo";

export class UtilityList extends Component {
  constructor(props) {
    super(props);
    this.state = { CurrentMap: this.findMap() };
    this.findMap = this.findMap.bind(this);
    this.seedUtility = this.seedUtility.bind(this);
  }
  findMap() {
    var URL = window.location.href;
    var URLpos = URL.search("de");
    var URLid = URL.substr(URLpos);
    return URLid;
  }
  seedUtility(id) {
    switch (id) {
      case "de_dust2":
        return seedUtilityDust2.map((utility) => {
          return <UtilityCard {...utility} key={utility.id} />;
        });

      case "de_mirage":
        return <h1>Mirage Goes here</h1>;

      case "de_inferno":
        return <h1>Inferno Goes here</h1>;

      case "de_overpass":
        return <h1>Overpass Goes here</h1>;

      case "de_vertigo":
        return seedUtilityVertigo.map((utility) => {
          return <UtilityCard {...utility} key={utility.id} />;
        });

      case "de_nuke":
        return <h1>Nuke Goes here</h1>;

      case "de_train":
        return <h1>Train Goes here</h1>;

      case "de_cache":
        return <h1>Cache Goes here</h1>;

      default:
        return <h1>THIS MAP DOESNT EXIST</h1>;
    }
  }

  render() {
    return (
      <div>
        <Container maxWidth="lg">
          <div className="container">
            {this.seedUtility(this.state.CurrentMap)}
          </div>
        </Container>
      </div>
    );
  }
}

export default UtilityList;
