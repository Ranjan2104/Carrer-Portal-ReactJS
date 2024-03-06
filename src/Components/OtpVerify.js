import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CircularProgress, Dialog, DialogContent } from "@mui/material";
import OtpInput from "react-otp-input";
import { useMediaQuery } from "@mui/material";
import { useApiOtpMutation } from "../Store/Middleware/api/otpAPI";
import Cookies from "js-cookie";
import { useApiresendotpMutation } from "../Store/Middleware/api/resendAPI";

export default function OtpVerify({ isOpen, setIsOpen }) {
  const [apiOtp, result] = useApiOtpMutation();
  const [apiResendOTP, resendResult] = useApiresendotpMutation();
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [error, setError] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 625px)");

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const handleClose = () => {
    setIsOpen((prev) => ({
      ...prev,
      isOTPOpen: !isOpen.isOTPOpen,
    }));
  };

  const handleSubmit = async () => {
    if (otp.length !== 5) {
      setError(true);
      return;
    } else {
      setError(false);
      const response = await apiOtp({
        otp,
        email: localStorage.getItem("userID"),
      });

      if (response?.data?.success) {
        localStorage.setItem(
          "candidate_id",
          response.data.message.candidate_id
        );
        Cookies.set("authToken", response.data.message.token);
        if (response.data.message.isResume) {
          window.location.href = "/authPage/jobdetails/openposition";
        } else {
          setIsOpen((prev) => ({
            ...prev,
            isOTPOpen: false,
            isResumeOpen: true,
          }));
        }
      } else {
        setError(true);
      }
    }
  };

  const resendOTP = async() => {
    setMinutes(1);
    setSeconds(30);
    await apiResendOTP({email: localStorage.getItem('userID')});
  }

  return (
    <div>
      <React.Fragment>
        <Dialog
          open={isOpen && isOpen.isOTPOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="xs"
        >
          <DialogContent>
            <Box>
              <div
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="login-popup-heading"
              >
                Sign Up
              </div>
              <div className="login-popup-input">
                <label className="sign-up-label">Enter OTP</label>
                <div className={`input-group ${!error && "mb-3"}`}>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    separator={<span style={{ margin: "0 8px" }}> </span>}
                    inputStyle={{
                      width: isSmallScreen ? "40px" : "50px",
                      height: isSmallScreen ? "50px" : "50px",
                      marginRight: isSmallScreen ? "20px" : "30px",
                      border: "1px solid black",
                    }}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
                {error && (
                  <div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "red",
                        fontWeight: "500",
                      }}
                    >
                      Invalid OTP
                    </span>
                  </div>
                )}
              </div>
              <div style={{ textAlign: 'end', marginRight:'25px' }}>
                {seconds > 0 || minutes > 0 ? (
                  <p>
                    Resend OTP in: {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </p>
                ) : (
                  <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={resendOTP}>Resend OTP</span>
                )}
              </div>
              <div style={{ paddingTop: "16px" }}>
                {result.isLoading ? (
                  <Button variant="contained" fullWidth disabled>
                    <CircularProgress color="inherit" />
                  </Button>
                ) : (
                  <Button variant="contained" fullWidth onClick={handleSubmit}>
                    Verify
                  </Button>
                )}
              </div>
              <div
                className="d-flex align-items-center overflow-hidden my-2"
                style={{ paddingTop: "15px" }}
              >
                <img
                  src="/loginLine.png"
                  alt="error"
                  width="45%"
                  className=""
                />
                <span className="px-2 fs-16">Or</span>
                <img
                  src="/loginLine.png"
                  alt="error"
                  width="50%"
                  className=""
                />
              </div>
              <div style={{ paddingTop: "24px" }}>
                <div className="login-with-text">Sign up with</div>
              </div>
              <div className="login-btn-btn-login">
                <Button
                  variant="outlined"
                  sx={{ width: "176px", height: "60px" }}
                >
                  <img src="/google.png" className="login-btn-btn-login-img" />
                  <span className="login-btn-btn-login-text">Google</span>
                </Button>
                <Button
                  variant="outlined"
                  sx={{ width: "230px", height: "60px" }}
                >
                  <img
                    src="/login_linkedin.png"
                    className="login-btn-btn-login-img"
                  />{" "}
                  <span className="login-btn-btn-login-text">LinkedIn</span>
                </Button>
              </div>
              {/* <div
                className="login-signup-text-main"
                style={{ justifyContent: "space-evenly" }}
              >
                <div className="login-signup-text">
                  Already have an account yet?
                </div>
                <Button variant="contained">
                  Sign In
                </Button>
              </div> */}
            </Box>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </div>
  );
}
