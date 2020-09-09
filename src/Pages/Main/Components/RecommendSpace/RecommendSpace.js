import React, { Component } from "react";
import SpaceCard from "./SpaceCard";
import "./RecommendSpace.scss";

export default class RecommendSpace extends Component {
  state = {
    recommendation: [],
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/Data/recommendation.json")
      .then((res) => res.json)
      .then((res) => {
        this.setState = {
          recommendation: res,
        };
      });
  };

  render() {
    console.log(this.state.recommendation.title);
    return (
      <div className="RecommendSpace">
        {this.state.recommendation.map((el) => {
          return (
            <li>
              <SpaceCard title={el.title} tag={el.tags} address={el.address} />
            </li>
          );
        })}
        {/* <SpaceCard /> */}
      </div>
    );
  }
}
