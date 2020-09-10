import React, { Component } from "react";
import UserReviewCard from "./UserReviewCard";
import "./UserReview.scss";

const LIMIT = 3;
export default class UserReview extends Component {
  constructor() {
    super();
    this.state = {
      userReview: [],
      offset: 0,
      currentScroll: 0,
    };
  }

  componentDidMount = () => {
    this.fetchUserReview();
    window.addEventListener("scroll", this.scrollUpdate);
  };

  fetchUserReview = () => {
    const { offset } = this.state;
    fetch(
      `http://18.223.188.215:8000/spaces/reviews?offset=${offset}&limit=${LIMIT}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          userReview: this.state.userReview.concat(res.reviews),
          offset: offset + LIMIT,
        });
      });
  };

  scrollUpdate = (e) => {
    const { offset, userReview } = this.state;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.fetchUserReview();
    }
  };

  render() {
    console.log(this.state.userReview, 0);
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
