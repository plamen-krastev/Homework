function solve(speed, area) {
    let speedLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }
    let differenceSpeed = speed - speedLimit[area];
    let status = 'reckless driving';
    if (differenceSpeed <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit[area]} zone`);
    } else {
        if (differenceSpeed <= 20) {
            status = 'speeding';
        } else if (differenceSpeed <= 40) {
            status = 'excessive speeding';
        }
        console.log(
            `The speed is ${differenceSpeed} km/h faster than the allowed speed of ${speedLimit[area]} - ${status}`
        );
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');