import React, { Component } from "react";
import SpaceCard from "./SpaceCard";
import "./PlusZone.scss";

class PlusZone extends Component {
  render() {
    return (
      <div className="PlusZone">
        <span className="plus">플러스존</span>
        <div className="plusContainer">
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
        </div>
        <div className="plusContainer">
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
        </div>
      </div>
    );
  }
}

export default PlusZone;
