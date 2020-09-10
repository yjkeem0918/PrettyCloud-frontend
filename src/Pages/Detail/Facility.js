import React, { Component } from "react";
import "./Facility.scss";

class Facility extends Component {
  render() {
    const { facilityData } = this.props;

    return (
      <div className="Facility" id="idFacility">
        <div className="facilityInfoBox">
          <h4 className="facilityHeader">시설 안내</h4>
          <ol className="facilityOl">
            {facilityData.map((amenities, idx) => {
              return (
                <li className="facilityList" key={idx}>
                  <span>
                    <span className="dataInfo">{idx + 1}</span> {amenities}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Facility;
