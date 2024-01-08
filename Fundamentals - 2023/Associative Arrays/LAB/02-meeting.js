function solve(arr) {

    let schedule = {};

    for (let row of arr) {
        let [curDay, curName] = row.split(' ');

        if (schedule.hasOwnProperty(curDay)) {
            console.log(`Conflict on ${curDay}!`);
            continue;
        }
        schedule[curDay] = curName;
        console.log(`Scheduled for ${curDay}`);
    }

    for (let [day, name] of Object.entries(schedule)) {
        console.log(day, '->', name);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);

// solve(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']
// );