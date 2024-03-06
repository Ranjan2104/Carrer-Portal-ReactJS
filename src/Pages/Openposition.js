import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import Dropdown from "../Components/Dropdown";
import OpenPositionCard from "../Components/OpenPositionCard";
import { useNavigate } from "react-router-dom";
import { useApidashboardMutation } from "../Store/Middleware/api/dashboardAPI";
import Cookies from "js-cookie";
import { useAllCategoryapiQuery } from "../Store/Middleware/api/getAllcategoryAPI";
import { Pagination } from "@mui/material";

const jobPosted = ["Any Time", "Past Week", "Last 24 Hours", "Past Month"];

const jobtype = ["Contract", "Contract To Hire", "Freelance", "Hire"];

const Openposition = () => {
  const nav = useNavigate();
  const [filterData, setFilterData] = useState({
    description: "",
    location: "",
    page: 1,
    company: "",
    jobPostedOn: "Any Time",
    category: "",
    jobType: ""
  });
  const [responseData, setResponseData] = useState([]);
  const [apiDashboard, result] = useApidashboardMutation();
  const { data } = useAllCategoryapiQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllData();
    document.title = "Open Positions | Carrer Portal";
  }, [filterData]);

  const getAllData = async () => {
    const response = await apiDashboard({
      description: filterData.description,
      location: filterData.location,
      token: Cookies.get("authToken"),
      page: filterData.page,
      company: filterData.company,
      jobPostedOn: filterData.jobPostedOn,
      category: filterData.category,
      jobType: filterData.jobType,
      workmode: filterData.workmode,
    });
    if (response?.data?.success) {
      setResponseData(response?.data?.message?.dashboard);
    }
  };

  const handlePageChange = (e, value) => {
    setFilterData((prev) => ({
      ...prev,
      page: value
    }))
  }
  
  return (
    <section className="openPositionSection">
      <div className="openPositionHeader">
        <div className="openPosition-m1">Open Positions</div>
        <div className="openPosition-m2">
          Live your best life and do your best work with us
        </div>
      </div>
      <div className="openPosition-m3">
        <div className="openPosition-serachBar">
          <SearchBar setFilterData={setFilterData} />
        </div>
        <div className="openPosition-dropdown">
          <div>
            <Dropdown
              name={"Job Posted on"}
              setFilterData={setFilterData}
              data={jobPosted}
            />
          </div>
          <div>
            <Dropdown
              name={"Job Type"}
              setFilterData={setFilterData}
              data={jobtype}
            />
          </div>
          <div>
            <Dropdown
              name={"Category/Role"}
              setFilterData={setFilterData}
              data={data?.message?.category.map((x) => x.name)}
            />
          </div>
          <div>
            <Dropdown
              name={"Company"}
              setFilterData={setFilterData}
              data={data?.message?.company.map((x) => x.name)}
            />
          </div>
        </div>
        <div className="hrPositionMain">
          <div className="hrOpenPosition"></div>
        </div>
        <div className="openPosition-Card JBScroll">
          {result.isLoading ? (
            <h3>Loading...</h3>
          ) : (
            responseData &&
            responseData?.data?.map((item, index) => {
              return (
                <div
                  onClick={() =>
                    nav(`/authPage/jobdetails/${item.joborder_id}`)
                  }
                  key={index}
                >
                  <OpenPositionCard data={item} />
                </div>
              );
            })
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination count={responseData?.total_page} color="primary" onChange={handlePageChange} page={filterData.page}/>
        </div>
      </div>
    </section>
  );
};

export default Openposition;
