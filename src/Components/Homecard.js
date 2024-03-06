import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Homecard = () => {
  return (
    <div className="homecardSection">
      <div className="homecardSectionFont">Software Engineer</div>
      <div className="homecardSection-m2">
        37+ Jobs
        <div><ChevronRightIcon /></div>
      </div>
    </div>
  );
};

export default Homecard;
