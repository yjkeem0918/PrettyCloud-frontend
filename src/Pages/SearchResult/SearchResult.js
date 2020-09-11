import React, { Component } from "react";
import API from "../../config";
import AsideNav from "../../Components/AsideNav";
import ResultFrame from "./ResultFrame";
import PremiumZone from "./PremiumZone";
import PlusZone from "./PlusZone";
import NormalZone from "./NormalZone";
import Footer from "../../Components/Footer";
import "./SearchResult.scss";

const LIMIT = 6;

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      premium: [],
      plus: [],
      normal: [],
      data: [],
      queryString: decodeURI(props.location.search.split("=")[1]),
      offset: 0,
    };
  }

  componentDidMount() {
    this.getSearchData();
    window.addEventListener("scroll", this.getData);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.setState(
        {
          queryString: decodeURI(this.props.location.search.split("=")[1]),
        },
        () => this.getSearchData()
      );
    }
  }

  getSearchData = () => {
    const { queryString, offset } = this.state;

    fetch(`${API}/spaces/premium?search=${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          premium: res.premiumClass,
        });
      });

    fetch(`${API}/spaces/plus?search=${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          plus: res.plusClass,
        });
      });

    fetch(
      `${API}/spaces/normal?search=${queryString}&offset=${offset}&limit=${LIMIT}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          normal: res.normalClass,
          offset: this.state.offset + LIMIT,
        });
      });
  };

  getData = () => {
    const { queryString, offset, normal } = this.state;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      fetch(
        `${API}/spaces/normal?search=${queryString}&offset=${offset}&limit=${LIMIT}`
      )
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            normal: normal.concat(res.normalClass),
            offset: offset + LIMIT,
          });
        });
    }
  };

  render() {
    const { queryString, premium, plus, normal } = this.state;
    return (
      <div className="SearchResult">
        <AsideNav />
        <ResultFrame queryString={queryString} />
        <PremiumZone premiumData={premium} />
        <PlusZone plusData={plus} />
        <NormalZone normalData={normal} />
        <Footer />
      </div>
    );
  }
}

export default SearchResult;
