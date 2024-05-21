function timeToWalk(steps, footprint, kmPerHour) {
  // every 500 meters - 1 minute break
  // calculate steps in meters
  let meters = steps * footprint;

  // km per hour to meters per second
  let meterPerSecond = (kmPerHour * 1000) / 60 / 60;

  // rest time in seconds
  let restTimeInSeconds = Math.floor(meters / 500) * 60;

  // total time in seconds
  let totalTimeInSeconds = Math.ceil(
    meters / meterPerSecond + restTimeInSeconds
  );

  let hours = Math.floor(totalTimeInSeconds / 60 / 60);
  let minutes = Math.floor(totalTimeInSeconds / 60) - hours * 60;
  let seconds = Math.ceil(totalTimeInSeconds - (hours * 60 + minutes * 60));

  // condition ? exprIfTrue : exprIfFalse
  console.log(
    `${hours < 9 ? "0" + hours.toString() : hours}:${
      minutes < 9 ? "0" + minutes.toString() : minutes
    }:${seconds < 9 ? "0" + seconds.toString() : seconds}`
  );
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
