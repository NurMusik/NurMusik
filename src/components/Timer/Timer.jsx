import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { formatTime, getTimeDimension } from "./times";
import "./Timer.css";

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

  const dimension = getTimeDimension(remainingTime);
  const [minutes, seconds] = formatTime(dimension, remainingTime);

  if(dimension == 'minutes') {
    return (
      <div className="timer">
        <div className="value">{minutes} M {seconds} S</div>
      </div>
    );
  } 
  return (
    <div className="timer">
      <div className="value">{seconds}</div>
      <div className="text">{dimension}</div>
    </div>
  );
};

export default Timer;
