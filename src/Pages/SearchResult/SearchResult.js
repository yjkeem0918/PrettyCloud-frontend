import React, { Component } from "react";
import ResultFrame from "./ResultFrame";
import PremiumZone from "./PremiumZone";
import PlusZone from "./PlusZone";
import NormalZone from "./NormalZone";
import Nav from "../../Components/Nav";
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

  componentDidUpdate(prevProps, prevState) {
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
    fetch(`http://192.168.219.106:8001/spaces/premium?search=${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          premium: res.premiumClass,
        });
      });

    fetch(`http://192.168.219.106:8001/spaces/plus?search=${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          plus: res.plusClass,
        });
      });

    fetch(
      `http://192.168.219.106:8001/spaces/normal?search=${queryString}&offset=${offset}&limit=${LIMIT}`
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
        `http://192.168.219.106:8001/spaces/normal?search=${queryString}&offset=${offset}&limit=${LIMIT}`
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
    console.log(
      "render. this.props.location.search >> ",
      decodeURI(this.props.location.search.split("=")[1])
    );

    const { queryString, premium, plus, normal } = this.state;
    return (
      <div className="SearchResult">
        <Nav queryString={queryString} />
        <ResultFrame queryString={queryString} />
        <PremiumZone premiumData={premium} />
        <PlusZone plusData={plus} />
        <NormalZone normalData={normal} />
      </div>
    );
  }
}

export default SearchResult;
