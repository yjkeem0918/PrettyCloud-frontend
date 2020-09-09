import React, { Component } from "react";
import "./Tags.scss";

class Tags extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div className="Tags">
        <div className="tagsBox">
          {categories.map((tag, idx) => {
            return (
              <span className="tag" key={idx}>
                #{tag}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tags;
