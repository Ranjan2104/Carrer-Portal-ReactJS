import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CircularProgress, Dialog, DialogContent } from "@mui/material";
import { useApiLoginMutation } from "../Store/Middleware/api/loginAPI";

export default function SignupPopup({ isOpen, setIsOpen }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [apiLogin, result] = useApiLoginMutation();
  const handleClose = () => {
    setIsOpen((prev) => ({
      ...prev,
      isSignupOpen: !isOpen.isSignupOpen,
    }));
  };

  const handleSubmit = async () => {
    if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      setError(true);
      return;
    } else {
      setError(false);
      localStorage.setItem("userID", email);
      const response = await apiLogin({ email });
      if (response.data.success) {
        setIsOpen((prev) => ({
          ...prev,
          isSignupOpen: false,
          isOTPOpen: true,
        }));
      }
    }
  };

  return (
    <div>
      <React.Fragment>
        <Dialog
          open={isOpen && isOpen.isSignupOpen}
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
                <label className="sign-up-label">Sign up With Email</label>
                <div className={`input-group ${!error && "mb-3"}`}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setEmail(e.target.value)}
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
                      Invalid Email Address
                    </span>
                  </div>
                )}
              </div>
              <div style={{ paddingTop: "16px" }}>
                {result.isLoading ? (
                  <Button variant="contained" fullWidth disabled>
                    <CircularProgress color="inherit" />
                  </Button>
                ) : (
                  <Button variant="contained" fullWidth onClick={handleSubmit}>
                    Submit
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
