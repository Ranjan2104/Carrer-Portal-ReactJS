import React from "react";

const HomeCooperateCard = ({ imgSrc, description, title, inverse }) => {
  return (
    <div className="homeCooperateCardSection" style={{ flexDirection: inverse ? 'row-reverse' : 'row' }}>
      <div className="homeCooperateCardP">
        <img src={imgSrc} className="homeCooperateCardImg"/>
      </div>
      <div className="homeCooperateCardText" style={{ paddingLeft: inverse && 'unset' }}>
        <div className="homeCooperateCardText-m1">{title}</div>
        <div className="homeCooperateCardText-m2">{description}</div>
      </div>
    </div>
  );
};

export default HomeCooperateCard;
