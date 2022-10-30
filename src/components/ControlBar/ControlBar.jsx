import React from "react";
import "./ControlBar.css";

const ControlBar = ({ playState, togglePlayer }) => {
  return (
    <div className="control-container">
      <button className="control-button control-prev">
        <i className="bi bi-caret-left-fill"></i>
      </button>
      <button onClick={() => togglePlayer()} className="control-button">
        {playState ? (
          <i className="bi-pause-circle " />
        ) : (
          <i className=" bi-play-circle" />
        )}
      </button>
      <button className="control-button control-next">
        <i className="bi-caret-right-fill"></i>
      </button>
    </div>
  );
};

export default ControlBar;
