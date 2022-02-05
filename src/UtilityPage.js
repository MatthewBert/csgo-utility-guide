import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import "./UtilityPage.css";

export class UtilityPage extends Component {
  
  componentDidMount() {
    
    const { handle } = this.props.match.params;
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
    } = this.props.location.state;
    
  }

  render() {
    console.log("map prop: ");
    return (
      <Container maxWidth="lg">
        <div className="UtilityPage">
          <h1>This is the UTILITYPAGE</h1>
          <div className="UtilityPage-content">
            <p>This utility page is for {this.props.location.state.map}</p>
            <p>
              The {this.props.location.state.type} is thrown from{" "}
              {this.props.location.state.start_location} and lands at{" "}
              {this.props.location.state.land_location}
            </p>
            <p>
              This {this.props.location.state.type} requires a{" "}
              {this.props.location.state.movement}
            </p>
          </div>
          <img src={this.props.location.state.img} alt={this.props.location.state.id} className="UtilityPageImg" />
          <h1 className="UtilityPage-description">
            DESCRIPTION: {this.props.location.state.description}
          </h1>
        </div>
      </Container>
    );
  }
}

export default UtilityPage;
