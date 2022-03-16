import React from "react";
import Transition from "react-transition-group/Transition";

import "./Modal.css";

const modal = ({ state, closed }) => {
  const transitionClasses = {
    entering: "ModalOpen",
    entered: "ModalOpen",
    exiting: "ModalClosed",
    exited: "ModalClosed",
  };

  return (
    <div className={`Modal ${transitionClasses[state]}`}>
      <h1>A Modal</h1>
      <button className="Button" onClick={closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
