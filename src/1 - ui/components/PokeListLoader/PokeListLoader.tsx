import React from "react";
import Loader from "react-loader-spinner";
import "./PokeListLoader.scss";

export class PokeListLoader extends React.Component {
  render() {
    return (
      <div className="c-loader">
        <Loader type="Rings" />
      </div>
    );
  }
}
