function solve(input) {

    let numbers = input
        .shift()
        .split('@')
        .map(x => Number(x));

    let jumpLength = 0;
    let lastIndex = 0;
    let failCount = [];

    for (let i = 0; ; i++) {
        let [jump, length] = input[i].split(' ');
        if (jump === "Love!") {
            break;
        }
        jumpLength += Number(length);
        if (jumpLength > numbers.length - 1) {
            jumpLength = 0;
        }
        if (numbers[jumpLength] === 0) {
            console.log(`Place ${jumpLength} already had Valentine's day.`);
        } else {
            numbers[jumpLength] -= 2;
            if (numbers[jumpLength] === 0) {
                console.log(`Place ${jumpLength} has Valentine's day.`);
            }
        }
        lastIndex = jumpLength;
        failCount = numbers.filter(x => x != 0);
    }

    console.log(`Cupid's last position was ${lastIndex}.`);
    if (failCount.length === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${failCount.length} places.`);
    }
}

// solve(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
// solve([
//     "2@4@2",
//     "Jump 2",
//     "Jump 2",
//     "Jump 8",
//     "Jump 3",
//     "Jump 1",
//     "Love!"
// ]);
solve([
    "4@2@4@2",
    "Jump 1",
    "Jump 2",
    "Jump 1",
    "Jump 2",
    "Jump 2",
    "Jump 2",
    "Love!"
]);