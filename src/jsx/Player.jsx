// import { AiFillPlayCircle } from 'react-icons/fa';
import { useState } from "react";
import "../css/Player.css";

const Player = () => {
  const [playState, setPlayState] = useState(true);

  const minutes = ["28", "29", "30"];
  const seconds = ["00", "01", "02"];
  const [minutesState, setMinutes] = useState("30");
  const [secondsState, setSeconds] = useState("00");

  const PlayBackState = () => {
    if (playState) {
      return <i className="bi bi-pause-circle"></i>;
    } else {
      return <i className=" bi bi-play-circle"></i>;
    }
  };

  return (
    <div className="PlayerPage">
      <div className="Banner"> 
      <i class="bi bi-arrow-left"></i>
      <div className="BannerTitle">NurMusik</div>
      <i class="bi bi-three-dots"></i>
      
      </div>
      <div className="RadioInfo"> Radio Information </div>
      <div className="TimerInfo">
        <div>
          <label style={{ fontWeight: "bold" }}>
            <select
              className="mx-2"
              required={true}
              value={minutesState}
              onChange={(e) => {
                // console.log(e.target.value);
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
        <i class="bi nextPrev bi-caret-left-fill"></i>
        <PlayBackState></PlayBackState>
        <i class="bi nextPrev bi-caret-right-fill"></i>
      </div>
    </div>
  );
};

export default Player;
