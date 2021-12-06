import React from "react";
import { Topbar } from "../../components/topbar/Topbar";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Topbar></Topbar>
        <h1>Home</h1>
      </div>
    );
  }
}

export { Home };
