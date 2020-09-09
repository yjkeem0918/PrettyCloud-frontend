import React, { Component } from "react";
import SpaceCard from "./SpaceCard";
import "./PlusZone.scss";

class PlusZone extends Component {
  render() {
    return (
      <div className="PlusZone">
        <span className="plus">플러스존</span>
        <div className="plusContainer">
          {this.props.plusData.map((el) => {
            return (
              <SpaceCard
                id={el.id}
                title={el.title}
                fee={parseInt(el.fee).toLocaleString()}
                address={el.address}
                capacity={el.capacity}
                review={el.review_number}
                like={el.like_number}
                paymentType={el.payment_type_id}
                tag={el.categories.slice(0, 5)}
                img={el.imgUrl}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PlusZone;
