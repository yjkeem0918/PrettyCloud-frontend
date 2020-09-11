import React, { Component } from "react";
import API from "../../../../config";
import SpaceCard from "./SpaceCard";
import "./RecommendSpace.scss";

export default class RecommendSpace extends Component {
  state = {
    recommendation: [],
  };

  componentDidMount = () => {
    fetch(`${API}/spaces/recommendation`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          recommendation: res.recommendation,
        });
      });
  };

  render() {
    return (
      <div className="RecommendSpace">
        {this.state.recommendation.map((el) => {
          return (
            <li className="spaceCard">
              <SpaceCard
                spaceCardId={el.id}
                imgUrl={el.imgUrl}
                title={el.title}
                address={el.address}
                tags={el.tags}
                fee={el.fee}
                capacity={el.capacity}
                reviewNumber={el.review_number}
                likeNumber={el.like_number}
              />
            </li>
          );
        })}
        {/* <SpaceCard /> */}
      </div>
    );
  }
}
