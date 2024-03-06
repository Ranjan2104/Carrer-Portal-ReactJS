import { Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React, { useEffect, useState } from "react";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ChipJobDetails from "../Components/ChipJobDetails";
import { useMediaQuery } from "@mui/material";
import { useApidashboardMutation } from "../Store/Middleware/api/dashboardAPI";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { useApijobapplyMutation } from "../Store/Middleware/api/jobApplyAPI";
import moment from "moment";
import { toast } from "react-toastify";

function getDate(date) {
  const beforeDate = new Date(`${date}`);
  const today = new Date();
  const diffTime = Math.abs(today - beforeDate);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

function Html(htmlString) {
  const containsEscapeCharacters = /&lt;|&gt;/.test(htmlString);
  const processedHtmlString = containsEscapeCharacters
    ? unescapeHtmlEntities(htmlString)
    : htmlString;
  return processedHtmlString;
}
function unescapeHtmlEntities(text) {
  var doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent;
}

const Jobdetails = () => {
  const { id } = useParams();
  const isSmallScreen = useMediaQuery("(max-width: 625px)");
  const [responseData, setResponseData] = useState();
  const [apiDashboard, result] = useApidashboardMutation();
  const [apiJodApply, Jobresult] = useApijobapplyMutation();

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllData();
    document.title = "Job Details | Carrer Portal";
  }, []);

  const getAllData = async () => {
    const response = await apiDashboard({
      jdid: Number(id),
      token: Cookies.get('authToken')
    });
    if (response?.data?.success) {
      setResponseData(response?.data?.message?.dashboard?.data[0]);
    }
  };

  const handleApplyJob = async () => {
    if (Cookies.get("authToken")) {
      const response = await apiJodApply({
        token: Cookies.get('authToken'),
        job_id: Number(id),
        cover_letter: "",
        additional_info: "",
      });
      if (response?.data?.success) {
        toast.success("Job Applied Successfully");
        getAllData();
      }
    } else {
      toast.error("Please Login First");
    }
  };

  return (
    <div className="jobdetailsMain">
      <div className="jobdetailsMainSection">
        <div className="jobdetailsMain-b1">
          <div
            style={{
              display: isSmallScreen ? "flex" : "unset",
              justifyContent: isSmallScreen ? "space-between" : "",
            }}
          >
            <div>
              <img src={responseData?.logo} className="jobdetailsImg" />
            </div>
            <div
              style={{
                display: !isSmallScreen ? "none" : "block",
                paddingTop: isSmallScreen ? "15px" : "unset",
              }}
            >
              {responseData?.job_applied && responseData?.job_applied ? (
                <div style={{ color: 'black' }}>
                  Applied on{" "}
                  {moment(responseData?.job_applied).format("DD/MM/YYYY")}
                </div>
              ) : (
                <Button
                  variant="contained"
                  style={{ position: "unset" }}
                  onClick={handleApplyJob}
                >
                  Apply
                </Button>
              )}
            </div>
          </div>
          <div>
            <div className="jobdetailsMain-m1">{responseData?.title}</div>
            <div className="jobdetailsMain-m2">{responseData?.name}</div>
          </div>
        </div>
        <div style={{ display: isSmallScreen ? "none" : "block" }}>
          {responseData?.job_applied && responseData?.job_applied ? (
            <div style={{ color: 'black' }}>
              Applied on{" "}
              {moment(responseData?.job_applied).format("DD/MM/YYYY")}
            </div>
          ) : (
            <Button
              variant="contained"
              style={{ position: "unset" }}
              onClick={handleApplyJob}
            >
              Apply
            </Button>
          )}
        </div>
      </div>
      <div className="jobdetailsMain-hrline-position">
        <div className="jobdetailsMain-hrline"></div>
      </div>
      <div className="jobdetailsMain-b2">
        <div className="jobdetailsMain-b2-m1">Highlights</div>
        <div className="jobdetailsMain-b2-m2Main">
          <div
            style={{ display: "flex", columnGap: "8px", alignItems: "center" }}
          >
            <LocationOnOutlinedIcon
              fontSize="small"
              style={{ color: "black" }}
            />
            <div className="jobdetailsMain-b2-m2">
              {responseData?.city}, {responseData?.state}
            </div>
          </div>
          <div
            style={{ display: "flex", columnGap: "8px", alignItems: "center" }}
          >
            <WorkOutlineOutlinedIcon
              fontSize="small"
              style={{ color: "black" }}
            />
            <div className="jobdetailsMain-b2-m2">
              {responseData?.min_experience} - {responseData?.max_experience}{" "}
              Years
            </div>
          </div>
          <div
            style={{ display: "flex", columnGap: "8px", alignItems: "center" }}
          >
            <AccessTimeOutlinedIcon
              fontSize="small"
              style={{ color: "black" }}
            />
            <div className="jobdetailsMain-b2-m2">
              {getDate(responseData?.date_created)} days ago
            </div>
          </div>
          <div
            style={{ display: "flex", columnGap: "8px", alignItems: "center" }}
          >
            <SendOutlinedIcon fontSize="small" style={{ color: "black" }} />
            <div className="jobdetailsMain-b2-m2">
              {responseData?.total_recruited} Applied
            </div>
          </div>
        </div>
      </div>
      <div className="jobdetailsMain-b3">
        <div className="jobdetailsMain-b3-m1">About the Job</div>
        <div
          id="htmlServer"
          className="jobdetailsMain-b3-m2"
          dangerouslySetInnerHTML={{
            __html: Html(responseData?.description),
          }}
        ></div>
      </div>
      <div className="jobdetailsMain-b4">
        <div className="jobdetailsMain-b3-m1">Skills</div>
        <div className="jobdetailsMain-b4-m2">
          {responseData &&
            responseData?.skills.map((item, index) => {
              return <ChipJobDetails title={item} key={index} />;
            })}
        </div>
      </div>
      <div className="jobdetailsMain-b5">
        <div className="jobdetailsMain-b5-m1">More info</div>
        <div className="jobdetailsMain-b5-m2">
          <div>
            <div className="jobdetailsMain-b5-m2-Text">Job type</div>
            <div className="jobdetailsMain-b5-m2-Text2">
              {(() => {
                if (responseData?.type === "H") return "Hire";
                else if (responseData?.type === "F") return "Freelance";
                else if (responseData?.type === "C") return "Contract";
                else if (responseData?.type === "C2H")
                  return "Contract to hire";
              })()}
            </div>
          </div>
          <div>
            <div className="jobdetailsMain-b5-m2-Text">Role</div>
            <div className="jobdetailsMain-b5-m2-Text2">
              {responseData?.role}
            </div>
          </div>
          <div>
            <div className="jobdetailsMain-b5-m2-Text">Work Mode</div>
            <div className="jobdetailsMain-b5-m2-Text2">
              {responseData?.workmode}
            </div>
          </div>
        </div>
      </div>
      <div className="jobdetailsMain-b6">
        {responseData?.job_applied && responseData?.job_applied ? (
          <div></div>
        ) : (
          <Button
            variant="contained"
            style={{ position: "unset" }}
            onClick={handleApplyJob}
          >
            Apply
          </Button>
        )}
        <Button
          variant="outlined"
          style={{ position: "unset", height: isSmallScreen ? "50px" : "" }}
        >
          Share with friend
        </Button>
      </div>
      <div className="jobdetailsMain-hrline-position">
        <div className="jobdetailsMain-hrline"></div>
      </div>
    </div>
  );
};

export default Jobdetails;
