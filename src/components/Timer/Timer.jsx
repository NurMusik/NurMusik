import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";
import { formatTime } from "./times";

const Timer = ({ playState, stopPlayer, duration }) => {
  const [key, setKey] = useState(0);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={playState}
      duration={duration}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[10, 6, 3, 0]}
      onComplete={() => {
        stopPlayer();
        setKey(key + 1);
      }}
    >
      {({ remainingTime, color }) => (
        <span style={{ color }}>{renderTime({ remainingTime })}</span>
      )}
    </CountdownCircleTimer>
  );
};

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Done</div>;
  }

  const [hours, minutes, seconds] = formatTime(remainingTime);

  return (
    <div className="timer">
      <div className="value">
        {hours > 0 && (
          <span>
            {hours}
            <span className="timer-subscript">hr</span>
          </span>
        )}
        {minutes > 0 && (
          <span>
            {minutes}
            <span className="timer-subscript">m</span>
          </span>
        )}
        {seconds > 0 && (
          <span>
            {seconds}
            <span className="timer-subscript">s</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Timer;
