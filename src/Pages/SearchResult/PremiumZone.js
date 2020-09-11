import React, { Component } from "react";
import SpaceCard from "./SpaceCard";
import "./PremiumZone.scss";

class PremiumZone extends Component {
  render() {
    const { premiumData } = this.props;
    return (
      <div className="PremiumZone">
        <span className="premium">프리미엄존</span>
        <div className="premiumContainer">
          {premiumData.map((el) => {
            return (
              <SpaceCard
                spaceCardId={el.id}
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
            );
          })}
        </div>
      </div>
    );
  }
}

export default PremiumZone;
