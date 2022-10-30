import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = ({ playState, stopPlayer, duration, key }) => {

  

  return (
    <CountdownCircleTimer
      key ={key}
      isPlaying={playState}
      duration={duration}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[10, 6, 3, 0]}
      onComplete={() => {
        stopPlayer();
        return { shouldRepeat: true, delay: 0, duration: {duration}};
      }}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Done</div>;
  }
  return (
    <div className="timer">
      <div className="text">Audio Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

export default Timer;
