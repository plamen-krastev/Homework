function roadRadar(speed, road) {
  // setting speed limit
  let speedLimit = 0;
  switch (road) {
    case "motorway":
      speedLimit = 130;
      break;
    case "interstate":
      speedLimit = 90;
      break;
    case "city":
      speedLimit = 50;
      break;
    case "residential":
      speedLimit = 20;
      break;
  }

  // checking the speed
  let diffSpeed = speed - speedLimit;
  let speedStatus = "";

  if (diffSpeed <= 0) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    return;
  } else if (diffSpeed <= 20) {
    speedStatus = "speeding";
  } else if (diffSpeed <= 40) {
    speedStatus = "excessive speeding";
  } else {
    speedStatus = "reckless driving";
  }
  console.log(
    `The speed is ${diffSpeed} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`
  );
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
