import React, { useState } from "react";
import Timer from "../Timer/Timer"

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayer = () => {
    const player = document.getElementById("player");
    const method = isPlaying ? "pause" : "play";
    setIsPlaying(!isPlaying);
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
      <Timer isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      <button onClick={togglePlayer}>{isPlaying ? "Pause" : "Play"}</button>
    </>
  );
};

export default AudioPlayer;
