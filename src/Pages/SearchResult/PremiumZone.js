import React, { Component } from "react";
import SpaceCard from "./SpaceCard";
import "./PremiumZone.scss";

class PremiumZone extends Component {
  render() {
    return (
      <div className="PremiumZone">
        <span className="premium">프리미엄존</span>
        <div className="premiumContainer">
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
        </div>
      </div>
    );
  }
}

export default PremiumZone;
