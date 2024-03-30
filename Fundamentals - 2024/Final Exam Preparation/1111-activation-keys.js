function solve(data) {
    let activationKey = data.shift();
    let command = data.shift();
    while (command !== 'Generate') {
        let tokens = command.split('>>>');
        let action = tokens.shift();
        if (action === 'Contains') {
            let substring = tokens.shift();
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (action === 'Flip') {
            let upperOrLower = tokens.shift();
            let [startIdx, finalIdx] = tokens.map(Number);
            if (upperOrLower === "Upper") {
                let upper = activationKey
                    .slice(startIdx, finalIdx)
                    .toUpperCase();

                activationKey = activationKey.slice(0, startIdx) + upper +
                        activationKey.slice(finalIdx);
            } else {
                let lower = activationKey
                    .slice(startIdx, finalIdx)
                    .toLowerCase();

                activationKey = activationKey.slice(0, startIdx) + lower +
                        activationKey.slice(finalIdx);
            }
            console.log(activationKey);
        } else {
            let [startIdx, finalIdx] = tokens.map(Number);
            let substring = activationKey.slice(startIdx, finalIdx);
            activationKey = activationKey.replace(substring, '');
            console.log(activationKey);
        }

        command = data.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}

solve([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);

solve([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);