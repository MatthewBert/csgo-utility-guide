import React, { Component } from "react";
import UtilityCard from "./UtilityCard";
import seedUtilityDust2 from "./seedData/seedUtilityDust2";
import seedUtilityVertigo from "./seedData/seedUtilityVertigo";
import "./UtilityList.css";

export class UtilityList extends Component {
  constructor(props) {
    super(props);
    this.state = { setFilterType: "All" };
    this.findMap = this.findMap.bind(this);
    this.seedUtility = this.seedUtility.bind(this);
  }
  findMap() {
    var URL = window.location.href;
    var URLpos = URL.search("De");
    var URLid = URL.substr(URLpos);
    console.log("FOUND MAP: ", URLid);
    return URLid;
  }
  seedUtility(id) {
    switch (id) {
      case "De_dust2":
        return seedUtilityDust2.map((utility) => {
          if (this.state.setFilterType === "All") {
            return <UtilityCard {...utility} key={utility.id} />;
          } else if (this.state.setFilterType === utility.type) {
            return <UtilityCard {...utility} key={utility.id} />;
          }
          return null;
        });

      case "De_mirage":
        return <h1>Mirage Utility Coming Soon!</h1>;

      case "De_inferno":
        return <h1>Inferno Utility Coming Soon!</h1>;

      case "De_overpass":
        return <h1>Overpass Utility Coming Soon!</h1>;

      case "De_vertigo":
        return seedUtilityVertigo.map((utility) => {
          if (this.state.setFilterType === "All") {
            return <UtilityCard {...utility} key={utility.id} />;
          } else if (this.state.setFilterType === utility.type) {
            return <UtilityCard {...utility} key={utility.id} />;
          }
          return null;
        });

      case "De_nuke":
        return <h1>Nuke Utility Coming Soon!</h1>;

      case "De_train":
        return <h1>Train Utility Coming Soon!</h1>;

      case "De_cache":
        return <h1>Cache Utility Coming Soon!</h1>;

      case "De_ancient":
        return <h1>Ancient Utility Coming Soon!</h1>;

      case "De_ancient":
        return (
          <div>
            <h1>Industry Utility Coming Soon!</h1>
            <p style={{ fontSize: "10px" }}>maybe perhaps...</p>
            <a
              style={{ fontSize: "40px" }}
              href="https://steamcommunity.com/sharedfiles/filedetails/?id=290336945"
              target="_blank"
            >
              vist the workshop map here
            </a>
          </div>
        );

      default:
        return <h1>THIS MAP DOES NOT EXIST</h1>

    }
  }

  render() {
    return (
      <div className="UtilityList">
        <div className="FilterButtons">
          <div className="ButtonHeaderUtil">
            <button
              value="All"
              onClick={() => this.setState({ setFilterType: "All" })}
            >
              ALL
            </button>
            <button
              value="Smoke"
              onClick={() => this.setState({ setFilterType: "Smoke" })}
            >
              SMOKE
            </button>
            <button
              value="Flash"
              onClick={() => this.setState({ setFilterType: "Flash" })}
            >
              FLASH
            </button>
            <button
              value="Molotov"
              onClick={() => this.setState({ setFilterType: "Molotov" })}
            >
              MOLOTOV
            </button>
            <button
              value="Explosive"
              onClick={() => this.setState({ setFilterType: "Explosive" })}
            >
              EXPLOSIVE
            </button>
          </div>
          <p>
            FILTER UTILITY TYPE: <b>{this.state.setFilterType}</b>
          </p>
        </div>
        <div className="container">{this.seedUtility(this.findMap())}</div>
      </div>
    );
  }
}

export default UtilityList;
