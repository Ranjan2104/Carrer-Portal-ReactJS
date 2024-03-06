import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import { useApiresumeuploadapiMutation } from "../Store/Middleware/api/resumeUploadAPI";
import { CircularProgress } from "@mui/material";

export default function ResumeUpload({ isOpen, setIsOpen }) {
  const nav = useNavigate();
  const [apiResumeUpload, result] = useApiresumeuploadapiMutation();
  const [fileData, setFileData] = useState("");

  const handleClose = () => {
    setIsOpen((prev) => ({
      ...prev,
      isResumeOpen: false,
    }));
  };

  const handleResumeUpload = (event) => {
    const file_extension = event.target.files[0]?.name
      .split(".")[1]
      ?.toLowerCase();

    if (["pdf", "docx", "txt"].includes(file_extension)) {
      setFileData(event.target.files[0]);
    } else {
      console.error("Invalid file format");
    }
  };

  const handleSubmit = async () => {
    const response = await apiResumeUpload({
      resume: fileData,
      candidate_id: localStorage.getItem("candidate_id"),
    });
    if (response.data.success) {
      handleClose();
      nav("/authPage/jobdetails/openposition");
    }
  };
  
  return (
    <React.Fragment>
      <Dialog
        open={isOpen.isResumeOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
      >
        <DialogTitle id="alert-dialog-title">
          {"Upload Your Resume"}
        </DialogTitle>
        <DialogContent dividers>
          <div className="input-group mb-3" style={{ paddingTop: "10px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-2" style={{ paddingTop: "5px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={localStorage.getItem("userID")}
              disabled
              style={{ cursor: "not-allowed" }}
            />
          </div>
          <span style={{ color: "green", fontSize: "14px" }}>Verified</span>
          <div
            className="border-primary rounded-3 p-3"
            style={{ borderStyle: "dashed", marginTop: "32px" }}
          >
            <div
              className="d-flex justify-content-between align-items-center cursor-pointer"
              onClick={() => {
                const uploadButton = document.getElementById("upload-button");
                if (uploadButton) {
                  uploadButton.click();
                }
              }}
            >
              <div>
                <div
                  className="text-primary fw-bold"
                  style={{ fontSize: "16px" }}
                >
                  {" "}
                  Upload resume
                </div>
                <div
                  className="text-muted fw-bold"
                  style={{ fontSize: "14px" }}
                >
                  *Txt, Docx, PDF (Max file size-6MB)
                </div>
              </div>
              <Button
                component="label"
                variant="text"
                className="text-end rounded"
              >
                <label htmlFor="upload-button">
                  <FileUploadIcon sx={{ cursor: "pointer" }} />
                </label>
                <input
                  type="file"
                  name="resume"
                  id="upload-button"
                  accept=".pdf, .docx, .txt"
                  style={{ display: "none" }}
                  onChange={handleResumeUpload}
                  //   {...props.getInputProps()}
                />
              </Button>
            </div>
          </div>
          {fileData && (
            <div className="mt-2" style={{ color: "grey" }}>
              {fileData.name}
            </div>
          )}
          <div className="resumeTextedmain">
            <div className="resumeTexted">
              I accept Carrer Potal's T&Cs, Privacy Policy, and communication
              settings. You will be logged in with the email you’ve given above.
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          {result.isLoading ? (
            <Button disabled variant="contained">
              <CircularProgress color="inherit" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
