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
    console.log("FOUND MAP: ", URLid)
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
        return <h1>Mirage Goes here</h1>;

      case "De_inferno":
        return <h1>Inferno Goes here</h1>;

      case "De_overpass":
        return <h1>Overpass Goes here</h1>;

      case "De_vertigo":
        return seedUtilityVertigo.map((utility) => {
          return <UtilityCard {...utility} key={utility.id} />;
        });

      case "De_nuke":
        return <h1>Nuke Goes here</h1>;

      case "De_train":
        return <h1>Train Goes here</h1>;

      case "De_cache":
        return <h1>Cache Goes here</h1>;

      default:
        return <h1>THIS MAP DOESNT EXIST</h1>;
    }
  }

  //componentDidUpdate(filterType, filterSide);

  render() {
    return (
      <div className="UtilityList">
        <div className="SidebarButtons">
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
        </div>
        <div className="container">{this.seedUtility(this.findMap())}</div>
        <p>
          SET FILTER TYPE: <b>{this.state.setFilterType}</b>
        </p>
      </div>
    );
  }
}

export default UtilityList;

// import React, { useState } from "react";
// import UtilityCard from "./UtilityCard";
// import seedUtilityDust2 from "./seedData/seedUtilityDust2";
// import seedUtilityVertigo from "./seedData/seedUtilityVertigo";
// import "./UtilityList.css";

// //need https://reactjs.org/docs/hooks-state.html to create state
// //lifting state https://reactjs.org/docs/lifting-state-up.html#:~:text=In%20React%2C%20sharing%20state%20is,it%20into%20the%20Calculator%20instead.
// //using state will let react know to re-render after the state has
// //updated with the respected filter buttons

// function findMap() {
//   var URL = window.location.href;
//   var URLpos = URL.search("de");
//   var URLid = URL.substr(URLpos);
//   return URLid;
// }

// function RenderUtilList(mapName) {
//   switch (mapName) {
//     case "de_dust2":
//     return seedUtilityDust2.map((utility) => {
//       return <UtilityCard {...utility} key={utility.id} />;
//     });

//     case "de_mirage":
//       return <h1>Mirage Goes here</h1>;

//     case "de_inferno":
//       return <h1>Inferno Goes here</h1>;

//     case "de_overpass":
//       return <h1>Overpass Goes here</h1>;

//     case "de_vertigo":
//       return seedUtilityVertigo.map((utility) => {
//         return <UtilityCard {...utility} key={utility.id} />;
//       });

//     case "de_nuke":
//       return <h1>Nuke Goes here</h1>;

//     case "de_train":
//       return <h1>Train Goes here</h1>;

//     case "de_cache":
//       return <h1>Cache Goes here</h1>;

//     default:
//       return <h1>THIS MAP DOESNT EXIST</h1>;
//   }
// }

// export default function UtilityList() {
//   const [filterType, setFilterType] = useState("all");
//   return (
//     <div className="UtilityList">
//       <div className="SidebarButtons">
//         <div className="ButtonHeaderSides">
//           <button>BOTH</button>
//           <button>CT</button>
//           <button>T</button>
//         </div>
//         <div className="ButtonHeaderUtil">
//           <button value="all" onClick={() => setFilterType("all")}>
//             ALL
//           </button>
//           <button value="smoke" onClick={() => setFilterType("smoke")}>
//             SMOKE
//           </button>
//           <button value="flash" onClick={() => setFilterType("flash")}>
//             FLASH
//           </button>
//           <button value="molly" onClick={() => setFilterType("molotov")}>
//             MOLOTOV
//           </button>
//           <button value="explosive" onClick={() => setFilterType("explosive")}>
//             EXPLOSIVE
//           </button>
//         </div>
//       </div>
//       <div className="container">{RenderUtilList(findMap())}</div>
//       <p>{filterType}</p>
//     </div>
//   );
// }
