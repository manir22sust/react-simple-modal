import React from "react";

import "./Modal.css";

export const Modal = ({ setModal }) => {
  return (
    <div className="background">
      <div className="container">
        <div className="closeBtn">
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <div className="title">
          <h1> Are you sure you want to continue ?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => setModal(false)}>
            cancel
          </button>
          <button>continue</button>
        </div>
      </div>
    </div>
  );
};
