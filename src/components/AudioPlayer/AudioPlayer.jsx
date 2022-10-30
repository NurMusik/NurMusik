import React, { useState } from "react";
import Timer from "../Timer/Timer";

const AudioPlayer = ({ playState, setPlayState }) => {
  const togglePlayer = () => {
    const player = document.getElementById("player");
    const method = playState ? "pause" : "play";
    setPlayState(!playState);
    player[method]();
  };

  return (
    <>
      <audio id="player" preload="none">
        <source
          src="https://media-ssl.musicradio.com/ClassicFM"
          type="audio/mp3"
        />
      </audio>
      <button onClick={togglePlayer}>
        {playState ? (
          <i className="bi bi-pause-circle" />
        ) : (
          <i className=" bi bi-play-circle" />
        )}
      </button>
    </>
  );
};

export default AudioPlayer;
