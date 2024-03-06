import React, { useEffect } from "react";
import OpenPositionCard from "../Components/OpenPositionCard";
import { useNavigate } from "react-router-dom";
import { useAppliedJobapiQuery } from "../Store/Middleware/api/getAppliedJobAPI";

const AppliedJob = () => {
  const nav = useNavigate();
  const { data, isLoading, error } = useAppliedJobapiQuery({});
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Applied Jobs | Carrer Portal";
  }, []);

  return (
    <section className="openPositionSection">
      <div className="openPositionHeader">
        <div className="openPosition-m1">Applied Jobs</div>
        <div className="openPosition-m2">
          Live your best life and do your best work with us
        </div>
      </div>
      <div className="openPosition-m3" style={{ paddingTop: "47px" }}>
        <div className="openPosition-Card">
          {data &&
            data?.message.map((item, index) => {
              return (
                <div key={index} onClick={() => nav(`/authPage/jobdetails/${item.joborder_id}`)}>
                  <OpenPositionCard
                    data={item}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default AppliedJob;
