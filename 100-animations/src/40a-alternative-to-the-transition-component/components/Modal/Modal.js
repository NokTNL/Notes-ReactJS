import React from "react";

import "./Modal.css";

const modal = ({ closed, isAnimationClosing, closeAnimation }) => {
  const cssClasses = [
    "Modal",
    isAnimationClosing ? "ModalClosed" : "ModalOpen",
  ];
  console.log(cssClasses);

  const handleClick = () => {
    // Close the animation first, wait 1 second, then unmount the backdrop and modal
    closeAnimation();
    setTimeout(() => {
      closed();
    }, 1000);
  };

  return (
    <div className={cssClasses.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={handleClick}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
