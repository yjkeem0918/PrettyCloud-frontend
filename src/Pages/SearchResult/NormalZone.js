import React, { Component } from "react";
import SpaceCard from "./SpaceCard";
import "./NormalZone.scss";

class NormalZone extends Component {
  render() {
    return (
      <div className="NormalZone">
        <div className="NormalZoneContainer">
          <div className="NormalZoneBox">
            {this.props.normalData.map((el) => {
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
      </div>
    );
  }
}

export default NormalZone;
