import React, { Component } from "react";
import UserReviewCard from "./UserReviewCard";
import "./UserReview.scss";

export default class UserReview extends Component {
  constructor() {
    super();
    this.state = {
      userReview: [],
    };
  }

  componentDidMount = () => {
    fetch("http://18.223.188.215:8000/spaces/reviews?offset=0&limit=3")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          userReview: res.reviews,
        });
      });
  };

  render() {
    // const userReview = this.state.userReview;

    return (
      <ul className="UserReview">
        {this.state.userReview.map((el) => {
          return (
            <li className="review">
              <UserReviewCard
                imgUrl={el.imgUrl}
                title={el.title}
                tags={el.tags}
                fee={el.fee}
                avgRating={el.avg_rating}
                review={el.review}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
