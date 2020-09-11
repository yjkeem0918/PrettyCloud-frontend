import React, { Component } from "react";
import API from "../../../../config";
import SlideCard from "./SlideCard";
import "./SliderPanel.scss";

export default class SliderPanel extends Component {
  state = {
    mainSlider: [],
  };

  componentDidMount = () => {
    fetch(`${API}/spaces/slider`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          mainSlider: res.mainSlider,
        });
      });
    // console.log("슬라이더 컴디마");
  };

  render() {
    // console.log("슬라이드패널:", this.state.mainSlider);
    return (
      <div className="SlidePanel">
        {this.state.mainSlider.map((el) => {
          return (
            <li className="slideCard">
              <SlideCard
                title={el.title}
                imgUrl={el.img_url}
                description={el.description}
              />
            </li>
          );
        })}
      </div>
    );
  }
}
