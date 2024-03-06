import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";

const OpenPositionCard = ({ data }) => {
  const beforeDate = new Date(`${data?.date_created || data?.applied_date}`);
  const today = new Date();
  const diffTime = Math.abs(today - beforeDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="openPositionCardMain">
      <div className="openPositionCardText-m1">{data?.title}</div>
      <div className="openPositionCardText-m2">Full time</div>
      <div className="openPositionCardText-m3">
        <div>
          <LocationOnIcon />
        </div>
        <div className="openPositionCardText-m3-text">{`${data?.city}, ${data?.state}`}</div>
      </div>
      <div className="openPositionCardText-m3">
        <div>
          <WorkIcon />
        </div>
        <div className="openPositionCardText-m3-text">
          Posted {diffDays} months ago
        </div>
      </div>
    </div>
  );
};

export default OpenPositionCard;
