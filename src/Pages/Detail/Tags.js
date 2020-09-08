import React, { Component } from "react";
import "./Tags.scss";

class Tags extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/detail.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ data: res.data });
      });
  }

  render() {
    console.log("이거>>>>>>>>>", this.state.data);
    const { data } = this.state;

    return (
      <div className="Tags">
        <div className="tagsBox">
          {data.map((tag) => {
            return (
              <span className="tag" key={tag.name}>
                {tag.name}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tags;
