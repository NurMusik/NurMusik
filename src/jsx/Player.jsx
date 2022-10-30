// import { AiFillPlayCircle } from 'react-icons/fa';
import { useState } from "react";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import Timer from "../components/Timer/Timer";
import "../css/Player.css";

const Player = () => {
  const [playState, setPlayState] = useState(false);

  const minutes = ["28", "29", "30"];
  const seconds = ["00", "01", "02"];
  const [minutesState, setMinutes] = useState("30");
  const [secondsState, setSeconds] = useState("00");

  return (
    <div className="PlayerPage">
      <div className="Banner">
        <i className="bi bi-arrow-left"></i>
        <div className="BannerTitle">NurMusik</div>
        <i className="bi bi-three-dots"></i>
      </div>
      <div className="RadioInfo">
        Radio Information
        <Timer playState={playState} setPlayState={setPlayState} />
      </div>
      <div className="TimerInfo">
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
      <div
        className="PlaybackFunctionality"
        onClick={() => setPlayState(!playState)}
      >
        <i className="bi nextPrev bi-caret-left-fill"></i>
        <AudioPlayer playState={playState} setPlayState={setPlayState} />
        <i className="bi nextPrev bi-caret-right-fill"></i>
      </div>
    </div>
  );
};

export default Player;
