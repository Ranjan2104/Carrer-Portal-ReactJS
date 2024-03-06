import React, { useEffect } from "react";
import OpenPositionCard from "../Components/OpenPositionCard";
import { useNavigate } from "react-router-dom";

const ProfileSection = () => {
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Profile Section | Carrer Portal';
  }, []);

  return (
    <section className="openPositionSection">
      <div className="openPositionHeader">
        <div className="openPosition-m1">My Profile</div>
        <div className="openPosition-m2">
          Live your best life and do your best work with us
        </div>
      </div>
      <div className="openPosition-m3" style={{ paddingTop: "47px" }}>
        <div className="openPosition-Card">
          <div className="profileSection-section">

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
