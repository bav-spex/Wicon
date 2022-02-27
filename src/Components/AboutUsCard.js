import React from "react";

import mfg_facility_2 from "./../assets/Aboutuspage/Mfg_facility_2.jpg";
import "./AboutUsCard.css";
function AboutUsCard(props) {
  const { manufacturer } = props;
  return (
    <>
      <div className="mfg__facility__card">
        <div className="mfg__facility__card__image__block">
          <img
            className="mfg__facility__card__image"
            src={manufacturer.manufacturing_facility_image}
            // src={mfg_facility_2}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default AboutUsCard;
