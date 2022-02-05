import React, { Component } from "react";
import { MenuItems } from "./seedData/NavbarMenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";

export class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="Navbar">
        <Link to="/">
          <h1 className="Navbar-logo">CSGO UTILITY GUIDE</h1>
        </Link>
        <div className="Navbar-burger" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul
          className={this.state.clicked ? "Navbar-menu acive" : "Navbar-menu"}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
