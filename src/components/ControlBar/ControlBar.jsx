import React from "react";
import "./ControlBar.css";

const ControlBar = ({ playState, togglePlayer }) => {
  return (
    <div>
      <button className="control-button">
        <i className="bi bi-caret-left-fill"></i>
      </button>
      <button onClick={() => togglePlayer()} className="control-button">
        {playState ? (
          <i className="bi bi-pause-circle " />
        ) : (
          <i className=" bi bi-play-circle" />
        )}
      </button>
      <button className="control-button">
        <i className="bi bi-caret-right-fill"></i>
      </button>
    </div>
  );
};

export default ControlBar;
