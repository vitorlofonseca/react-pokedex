import React, { Component } from "react";
import "./Topbar.scss";

export class Topbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="c-topbar">
        <img
          className="c-logo"
          src={process.env.PUBLIC_URL + "images/logo.png"}
          alt="PokeWiki logo"
        />
      </div>
    );
  }
}

export default Topbar;
