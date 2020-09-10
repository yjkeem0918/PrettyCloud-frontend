import React, { Component } from "react";
import SpaceCard from "./SpaceCard";
import "./NormalZone.scss";

class NormalZone extends Component {
  render() {
    const { normalData } = this.props;
    return (
      <div className="NormalZone">
        <div className="NormalZoneContainer">
          <div className="NormalZoneBox">
            {normalData.map((el) => (
              <SpaceCard
                key={el.id}
                title={el.title}
                fee={parseInt(el.fee).toLocaleString()}
                address={el.address}
                capacity={el.capacity}
                review={el.review_number}
                like={el.like_number}
                paymentType={el.payment_type_id}
                tag={el.tags.slice(0, 4)}
                img={el.imgUrl}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default NormalZone;
