const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const getTimeDays = (time) => (time / daySeconds) | 0;
const getTimeHours = (time) => Math.floor(time / hourSeconds) | 0;
const getTimeMinutes = (time) => Math.floor(time / minuteSeconds) | 0;

export const getTimeDimension = (time) => {
  if (getTimeDays(time) > 1) return "days";
  if (getTimeHours(time) > 1) return "hours";
  if (getTimeMinutes(time) > 1) return "minutes";
  return "seconds";
};

export const formatTime = (dimension, time) => {
  switch (dimension) {
    case "days":
      return getTimeDays(time);
    case "hours":
      return getTimeHours(time);
    case "minutes":
      return getTimeMinutes(time);
    case "seconds":
      return time;
    default:
      return time;
  }
};
