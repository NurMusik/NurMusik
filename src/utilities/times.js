const minuteSeconds = 60;
const hourSeconds = 3600;

const getTimeHours = (time) => Math.floor(time / hourSeconds) % 24 | 0;
const getTimeMinutes = (time) => Math.floor(time / minuteSeconds) % 60 | 0;
const getTimeSecondsLeft = (time) => Math.floor(time % minuteSeconds) | 0;

export const formatTime = (time) => {
  return [getTimeHours(time), getTimeMinutes(time), getTimeSecondsLeft(time)];
};
