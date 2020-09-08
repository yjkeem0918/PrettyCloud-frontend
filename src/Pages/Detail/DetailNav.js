import React, { Component } from "react";
import "./DetailNav.scss";

const NAV_ID = [
  { id: "공간소개" },
  { id: "시설안내" },
  { id: "유의사항" },
  { id: "환불정책" },
  { id: "이용후기" },
];

class DetailNav extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {};

  render() {
    return (
      <div className="DetailNav">
        <ul className="navWrapper">
          {NAV_ID.map((el) => {
            return (
              <li
                onScroll={this.handleScroll}
                className="navButton"
                key={el.id}
              >
                <a href="#">{el.id}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DetailNav;
