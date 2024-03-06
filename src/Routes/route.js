import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import CommonElement from "../CommonElement";
import Homepage from "../Pages/Homepage";
import Openposition from "../Pages/Openposition";
import Jobdetails from "../Pages/Jobdetails";
import AppliedJob from "../Pages/AppliedJob";
import ProfileSection from "../Pages/ProfileSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonElement />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/authPage/jobdetails/openposition",
        element: <Openposition />,
      },
      {
        path: "/authPage/jobdetails/:id",
        element: <Jobdetails />,
      },
      {
        path: "/authPage/jobdetails/appliedJob",
        element: <AppliedJob />,
      },
      {
        path: "/authPage/profileSection",
        element: <ProfileSection />,
      },
    ],
  },
]);
