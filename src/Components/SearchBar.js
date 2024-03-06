import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useMediaQuery } from "@mui/material";

function SearchBar({ setFilterData }) {
  const isSmallScreen = useMediaQuery("(max-width: 625px)");
  const [searchData, setSearchData] = useState({
    description: "",
    location: "",
  });
  const handleSearch = (e) => {
    e.preventDefault();
    setFilterData((prev) => ({
      ...prev,
      description: searchData.description,
      location: searchData.location,
    }));
  };
  return (
    <div className="searchBarMain">
      <form>
        <div
          className="mx-lg-6 border border-2 rounded-pill"
          style={{ padding: "14px 14px 14px 14px", backgroundColor: "#F3F8FB" }}
        >
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center">
              <SearchIcon fontSize="small" />
              <input
                type="text"
                className="fw-bold border-0 bg-transparent"
                placeholder="Keyword"
                style={{ width: isSmallScreen ? "95px" : "240px" }}
                onChange={(e) => {
                  setSearchData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }}
              />
            </div>
            <div
              className="border-2 border-end"
              style={{ borderColor: "gray", height: "3ch" }}
            ></div>
            <div className="d-flex align-items-center">
              <LocationOnOutlinedIcon fontSize="small" />
              <input
                type="text"
                className="fw-bold border-0 bg-transparent px-2"
                placeholder="Location"
                style={{ width: isSmallScreen ? "100px" : "240px" }}
                onChange={(e) => {
                  setSearchData((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }}
              />
              <button
                className="rounded-circle border-0"
                style={{
                  backgroundColor: "#006CB7",
                  width: "32px",
                  height: "32px",
                }}
                onClick={handleSearch}
              >
                <SearchIcon
                  className=""
                  fontSize="small"
                  sx={{ color: "#FFFFFF" }}
                />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
