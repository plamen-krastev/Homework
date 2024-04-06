function solve(input) {
    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    const index = daysOfWeek.indexOf(input) + 1;
    if (index > 0 && index < 8) {
        console.log(index);
    } else {
        console.log('error');
    }
}

solve('Monday');
solve('Friday');
solve('Invalid');