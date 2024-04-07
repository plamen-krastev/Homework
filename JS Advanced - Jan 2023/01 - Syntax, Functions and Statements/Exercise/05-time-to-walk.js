function solve(steps, stepLength, kmPerHour) {
    let distanceInMeters = steps * stepLength;
    let metersPerSecond = kmPerHour / 3.6;

    let addMinutes = Math.floor(distanceInMeters / 500);

    let hours = Math.floor(distanceInMeters / 1000 / kmPerHour);
    let minutes = Math.floor(distanceInMeters / metersPerSecond / 60) + addMinutes;
    let seconds = Math.round((distanceInMeters / metersPerSecond) % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);