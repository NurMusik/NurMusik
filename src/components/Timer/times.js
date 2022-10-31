const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const getTimeDays = (time) => Math.floor(time / daySeconds) | 0;
const getTimeHours = (time) => Math.floor(time / hourSeconds) | 0;
const getTimeMinutes = (time) =>Math.floor(time / minuteSeconds) | 0;
const getTimeSecondsLeft = (time) =>Math.floor(time % minuteSeconds) | 0;

export const getTimeDimension = (time) => {
  const days = getTimeDays(time);
  const hours = getTimeHours(time);
  const minutes = getTimeMinutes(time);
  if (days > 1) return "days";
  if (days === 1) return "day";
  if (hours > 1) return "hours";
  if (hours === 1) return "hour";
  if (minutes > 1) return "minutes";
  if (minutes === 1) return "minute";
  if (time === 1) return "second";
  return "seconds";
};

export const formatTime = (dimension, time) => {
  const d = dimension.at(0);
  switch (d) {
    case "d":
      return getTimeDays(time);
    case "h":
      return getTimeHours(time);
    case "m":
      return [getTimeMinutes(time), getTimeSecondsLeft(time)];
    case "s":
      return [0,time];
    default:
      return time;
  }
};
