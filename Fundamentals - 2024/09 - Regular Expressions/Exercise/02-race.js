function race(data) {
    let participants = data
        .shift()
        .split(', ');
    let racers = {};
    for (let racer of participants) {
        racers[racer] = 0;
    }
    // console.log(racers);
    let namePattern = /[A-Za-z]+/;
    let digitPatter = /\d/;

    for (let row of data) {
        if (row === 'end of race') {
            break;
        }
        let name = '';
        let distance = 0;
        for (let char of row) {
            let matchDigit = digitPatter.exec(char);
            let matchChar = namePattern.exec(char);
            if (matchDigit !== null) {
                distance += Number(matchDigit[0]);
            }
            if (matchChar !== null) {
                name += matchChar[0];
            }
        }
        if (racers.hasOwnProperty(name)) {
            racers[name] += distance;
        }
    }
    
    let result = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${result[0][0]}`);
    console.log(`2nd place: ${result[1][0]}`);
    console.log(`3rd place: ${result[2][0]}`);
}

// race([
//     'George, Peter, Bill, Tom',
//     'G4e@55or%6g6!68e!!@ ',
//     'R1@!3a$y4456@',
//     'B5@i@#123ll',
//     'G@e54o$r6ge#',
//     '7P%et^#e5346r',
//     'T$o553m&6',
//     'end of race'
// ]);

race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
]);