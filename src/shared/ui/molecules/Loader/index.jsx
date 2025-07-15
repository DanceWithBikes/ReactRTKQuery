import { CircularProgress } from "@mui/material";
import "./index.less";
import React from "react";

export const Loader = () => (
  <div className={"loader"}>
    <CircularProgress />
  </div>
);
