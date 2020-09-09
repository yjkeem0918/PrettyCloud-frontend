import React, { Component } from "react";
import ResultFrame from "./ResultFrame";
import PremiumZone from "./PremiumZone";
import PlusZone from "./PlusZone";
import NormalZone from "./NormalZone";
import "./SearchResult.scss";

const LIMIT = 6;

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      premium: [],
      plus: [],
      normal: [],
      data: [],
      qureyString: "루프탑",
      offset: 0,
    };
  }
  componentDidMount() {
    fetch(
      `http://192.168.219.112:8001/spaces/search?search=${this.state.qureyString}&offset=${this.state.offset}&limit=${LIMIT}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          premium: res.premium,
          plus: res.plus,
          normal: res.normal,
          // qureyString: "촬영스튜디오",
          offset: LIMIT + 6,
        });
      });
    // window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      // fetch(
      //   `http://192.168.219.107:8001/spaces/search?search=${this.state.qureyString}&offset=${this.state.offset}&limit=${LIMIT}`
      // )
      //   .then((res) => res.json())
      //   .then((res) => {
      //     this.setState({
      //       offset: LIMIT + 6,
      //     });
      //   });
    }
  };

  render() {
    const { premium, plus, normal } = this.state;
    return (
      <div className="SearchResult">
        <ResultFrame qureyString={this.state.qureyString} />
        <PremiumZone premiumData={premium} />
        <PlusZone plusData={plus} />
        <NormalZone normalData={normal} />
      </div>
    );
  }
}

export default SearchResult;
