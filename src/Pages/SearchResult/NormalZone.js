import React, { Component } from "react";
import SpaceCard from "./SpaceCard";
import "./NormalZone.scss";

class NormalZone extends Component {
  render() {
    return (
      <div className="NormalZone">
        <div className="NormalZoneContainer">
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
        </div>
        <div className="NormalZoneContainer">
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
        </div>
        <div className="NormalZoneContainer">
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
        </div>
      </div>
    );
  }
}

export default NormalZone;
