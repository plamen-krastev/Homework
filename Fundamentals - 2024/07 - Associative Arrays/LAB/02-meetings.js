function weekMeetings(input) {
    let meetings = {};
    for (let token of input) {
        let [day, name] = token.split(' ');
        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}

weekMeetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);

// weekMeetings(
//     ['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']
// );