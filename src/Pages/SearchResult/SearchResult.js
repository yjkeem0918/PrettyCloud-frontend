import React, { Component } from "react";
import ResultFrame from "./ResultFrame";
import PremiumZone from "./PremiumZone";
import PlusZone from "./PlusZone";
import NormalZone from "./NormalZone";
import "./SearchResult.scss";

class SearchResult extends Component {
  render() {
    return (
      <div className="SearchResult">
        <ResultFrame />
        <PremiumZone />
        <PlusZone />
        <NormalZone />
      </div>
    );
  }
}

export default SearchResult;
