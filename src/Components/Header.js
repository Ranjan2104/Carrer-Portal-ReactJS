import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupPopup from "./SignupPopup";
import OtpVerify from "./OtpVerify";
import ResumeUpload from "./ResumeUpload";
import { Avatar } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import Cookies from "js-cookie";

const Header = () => {
  const isSmallScreen = useMediaQuery("(max-width: 625px)");
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState({
    isSignupOpen: false,
    isOTPOpen: false,
    isResumeOpen: false,
    isAvatarOpen: false,
    hamburgerMenuOpen: false,
  });

  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove('authToken');
    window.location.href = ("/");
  }

  return (
    <>
      {!isSmallScreen ? (
        <section className="headerSection">
          <div className="headerSeperate">
            <div>
              <Link to={Cookies.get("authToken") ? "/authPage/jobdetails/openposition" :"/"}>
                <img
                  src="/spanIdeaLogo.webp"
                  alt="Spanidea Logo"
                  className="spanIdeaLogo"
                />
              </Link>
            </div>
            <div style={{ display: "flex", columnGap: "50px" }}>
              <div
                className="jobsFont"
                onClick={() => {
                  nav("/authPage/jobdetails/openposition");
                  setIsOpen((prev) => ({
                    ...prev,
                    hamburgerMenuOpen: !isOpen.hamburgerMenuOpen,
                  }));
                }}
              >
                Jobs
              </div>
              <div>
                {(() => {
                  if (
                    window?.location?.pathname?.split("/")[1] === "authPage" && Cookies.get('authToken')
                  ) {
                    return (
                      <div>
                        <div className="dropdown">
                          <div
                            role="button"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            className="align-items-center d-flex justify-content-lg-end "
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div
                              className="pe-0"
                              style={{ width: "45px", height: "45px" }}
                            >
                              <Avatar
                                sx={{ cursor: "pointer" }}
                                onClick={() =>
                                  setIsOpen((prev) => ({
                                    ...prev,
                                    isAvatarOpen: !isOpen.isAvatarOpen,
                                  }))
                                }
                              />
                            </div>
                          </div>
                          <ul
                            className={`dropdown-menu showRight shadow-lg ul-dropdown ${
                              isOpen.isAvatarOpen ? "show" : ""
                            }`}
                            style={{ zIndex: "2" }}
                            aria-labelledby="dropdownMenuLink"
                          >
                            <li>
                              <a
                                className="dropdown-item"
                                style={{ cursor: "pointer", fontWeight: "600" }}
                                onClick={() => {
                                  nav("/authPage/profileSection");
                                  setIsOpen((prev) => ({
                                    ...prev,
                                    isAvatarOpen: !prev.isAvatarOpen,
                                    hamburgerMenuOpen: !prev.hamburgerMenuOpen,
                                  }));
                                }}
                              >
                                My Profile
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                style={{ cursor: "pointer", fontWeight: "600" }}
                                onClick={() => {
                                  nav("/authPage/jobdetails/appliedJob");
                                  setIsOpen((prev) => ({
                                    ...prev,
                                    isAvatarOpen: !prev.isAvatarOpen,
                                    hamburgerMenuOpen: !prev.hamburgerMenuOpen,
                                  }));
                                }}
                              >
                                Applied Jobs
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a
                                className="dropdown-item logouthover"
                                style={{ cursor: "pointer", fontWeight: "600" }}
                                onClick={handleLogout}
                              >
                                Logout
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <button
                        className="login-btn"
                        onClick={() =>
                          setIsOpen((prev) => ({
                            ...prev,
                            isSignupOpen: !isOpen.isSignupOpen,
                            hamburgerMenuOpen: !isOpen.hamburgerMenuOpen,
                          }))
                        }
                      >
                        Login
                      </button>
                    );
                  }
                })()}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="headerSection">
          <div className="mobile-header-m1">
            <div>
              <Link to="/">
                <img
                  src="/spanIdeaLogo.webp"
                  alt="Spanidea Logo"
                  className="spanIdeaLogo"
                />
              </Link>
            </div>
            <div>
              {!isOpen.hamburgerMenuOpen ? (
                <MenuIcon
                  fontSize={"large"}
                  onClick={() =>
                    setIsOpen((prev) => ({
                      ...prev,
                      hamburgerMenuOpen: !prev.hamburgerMenuOpen,
                    }))
                  }
                />
              ) : (
                <CloseIcon
                  fontSize={"large"}
                  onClick={() =>
                    setIsOpen((prev) => ({
                      ...prev,
                      hamburgerMenuOpen: !prev.hamburgerMenuOpen,
                    }))
                  }
                />
              )}
            </div>
          </div>
          {isOpen.hamburgerMenuOpen && (
            <Fade
              in={isOpen.hamburgerMenuOpen}
              style={{ transformOrigin: "0 0 0" }}
              {...(isOpen.hamburgerMenuOpen ? { timeout: 1000 } : {})}
            >
              <div className="mobile-header-m2">
                <div
                  className="jobsFont"
                  onClick={() => {
                    nav("/authPage/jobdetails/openposition");
                    setIsOpen((prev) => ({
                      ...prev,
                      hamburgerMenuOpen: !isOpen.hamburgerMenuOpen,
                    }));
                  }}
                >
                  Jobs
                </div>
                <div>
                  {(() => {
                    if (
                      window?.location?.pathname?.split("/")[1] === "authPage"
                    ) {
                      return (
                        <div>
                          <div className="dropdown">
                            <div
                              role="button"
                              id="dropdownMenuLink"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              className="align-items-center d-flex justify-content-lg-end "
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <div
                                className="pe-0"
                                style={{ width: "45px", height: "45px" }}
                              >
                                <Avatar
                                  sx={{ cursor: "pointer" }}
                                  onClick={() =>
                                    setIsOpen((prev) => ({
                                      ...prev,
                                      isAvatarOpen: !isOpen.isAvatarOpen,
                                    }))
                                  }
                                />
                              </div>
                            </div>
                            <ul
                              className={`dropdown-menu showRight shadow-lg ul-dropdown ${
                                isOpen.isAvatarOpen ? "show" : ""
                              }`}
                              style={{ zIndex: "2" }}
                              aria-labelledby="dropdownMenuLink"
                            >
                              <li>
                                <a
                                  className="dropdown-item"
                                  style={{
                                    cursor: "pointer",
                                    fontWeight: "600",
                                  }}
                                  onClick={() => {
                                    nav("/authPage/profileSection");
                                    setIsOpen((prev) => ({
                                      ...prev,
                                      isAvatarOpen: !prev.isAvatarOpen,
                                      hamburgerMenuOpen:
                                        !prev.hamburgerMenuOpen,
                                    }));
                                  }}
                                >
                                  My Profile
                                </a>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  style={{
                                    cursor: "pointer",
                                    fontWeight: "600",
                                  }}
                                  onClick={() => {
                                    nav("/authPage/jobdetails/appliedJob");
                                    setIsOpen((prev) => ({
                                      ...prev,
                                      isAvatarOpen: !prev.isAvatarOpen,
                                      hamburgerMenuOpen:
                                        !prev.hamburgerMenuOpen,
                                    }));
                                  }}
                                >
                                  Applied Jobs
                                </a>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <a
                                  className="dropdown-item logouthover"
                                  style={{
                                    cursor: "pointer",
                                    fontWeight: "600",
                                  }}
                                  onClick={handleLogout}
                                >
                                  Logout
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <button
                          className="login-btn"
                          onClick={() =>
                            setIsOpen((prev) => ({
                              ...prev,
                              isSignupOpen: !isOpen.isSignupOpen,
                              hamburgerMenuOpen: !isOpen.hamburgerMenuOpen,
                            }))
                          }
                        >
                          Login
                        </button>
                      );
                    }
                  })()}
                </div>
              </div>
            </Fade>
          )}
        </section>
      )}
      {isOpen.isSignupOpen && (
        <SignupPopup isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      {isOpen.isOTPOpen && <OtpVerify isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpen.isResumeOpen && (
        <ResumeUpload isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
};

export default Header;
