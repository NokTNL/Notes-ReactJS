import React from "react";

import "./Backdrop.css";

const backdrop = ({ isAnimationClosing }) => {
  const cssClasses = [
    "Backdrop",
    isAnimationClosing ? "BackdropClosed" : "BackdropOpen",
  ];

  return <div className={cssClasses.join(" ")}></div>;
};

export default backdrop;
