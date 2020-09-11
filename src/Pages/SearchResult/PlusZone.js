import React, { Component } from "react";
import SpaceCard from "./SpaceCard";
import "./PlusZone.scss";

class PlusZone extends Component {
  render() {
    const { plusData } = this.props;
    return (
      <div className="PlusZone">
        <span className="plus">플러스존</span>
        <div className="plusContainer">
          {plusData.map((el) => (
            <SpaceCard
              key={el.id}
              title={el.title}
              fee={parseInt(el.fee).toLocaleString()}
              address={el.address}
              capacity={el.capacity}
              review={el.review_number}
              like={el.like_number}
              paymentType={el.payment_type_id}
              tag={el.tags.slice(0, 5)}
              img={el.imgUrl}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PlusZone;
