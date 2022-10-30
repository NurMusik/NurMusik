import { useState } from "react";
import ControlBar from "../ControlBar/ControlBar";
import Timer from "../Timer/Timer";
import "./AudioPlayer.css";

const Player = () => {
  const [playState, setPlayState] = useState(false);

  const minutes = ["00", "01", "02"];
  const seconds = ["00", "01", "02"];
  const [minutesState, setMinutes] = useState("00");
  const [secondsState, setSeconds] = useState("00");

  const totalSeconds = parseInt(minutesState) * 60 + parseInt(secondsState);

  const stopPlayer = () => {
    const player = document.getElementById("player");
    player["pause"]();
    setPlayState(false);
  };

  const startPlayer = () => {
    const player = document.getElementById("player");
    player["play"]();
    setPlayState(true);
  };

  const togglePlayer = () => (playState ? stopPlayer() : startPlayer());

  return (
    <>
      <audio id="player" preload="none">
        <source
          src="https://media-ssl.musicradio.com/ClassicFM"
          type="audio/mp3"
        />
      </audio>
      <div className="PlayerPage">
        {/* <div className="Banner"> */}
        {/* <i className="bi bi-arrow-left"></i> */}
        {/* <h1 className="BannerTitle">NurMusik</h1> */}
        {/* <i className="bi bi-three-dots"></i> */}
        {/* </div> */}
        <div className="RadioInfo">
          <h2 className="radio-frequency">102.5</h2>
          <h3 className="radio-name">Classic FM</h3>
          {/* <h4 className="radio-description">The world's greatest music</h4> */}
        </div>
        <div className="TimerInfo">
          <Timer
            playState={playState}
            stopPlayer={stopPlayer}
            duration={totalSeconds}
          />
          <div>
            <label style={{ fontWeight: "bold" }}>
              <select
                className="mx-2"
                required={true}
                value={minutesState}
                onChange={(e) => {
                  setMinutes(e.target.value);
                }}
              >
                {minutes.map((h, id) => (
                  <option key={id} value={h}>
                    {h}{" "}
                  </option>
                ))}
              </select>
            </label>
            <label style={{ fontWeight: "bold" }}>
              <select
                className="mx-2"
                required={true}
                value={secondsState}
                onChange={(e) => {
                  // console.log(e.target.value);
                  setSeconds(e.target.value);
                }}
              >
                {seconds.map((h, id) => (
                  <option key={id} value={h}>
                    {h}{" "}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <ControlBar playState={playState} togglePlayer={togglePlayer} />
      </div>
    </>
  );
};

export default Player;
