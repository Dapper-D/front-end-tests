import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./MultiStepProgressBar.css";
import CheckIcon from "@mui/icons-material/Check";

export const MultiStepProgressBar = (props) => {
  return (
    <ProgressBar
      percent={((props.step - 1) * 100) / 2}
      filledBackground="#fdb528"
      height="2px"
      width="80%"
      margin="auto"
    >
      <Step transition="scale">
        {({ accomplished, index }) => (
          <>
            <div className={`step ${accomplished ? "completed" : null}`}>
              <CheckIcon />
            </div>
          </>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>
            {" "}
            <CheckIcon />
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${accomplished ? "completed" : null}`}>
            {" "}
            <CheckIcon />
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};
