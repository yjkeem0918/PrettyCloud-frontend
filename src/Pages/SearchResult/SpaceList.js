import React, { Component } from "react";
import SpaceCard from "./SpaceCard";
class SpaceList extends Component {
  render() {
    return (
      <div className="SpaceList">
        <ul>
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
          <SpaceCard />
        </ul>
      </div>
    );
  }
}

export default SpaceList;
