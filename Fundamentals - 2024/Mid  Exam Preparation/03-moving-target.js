function solve(arr) {

    let targets = arr
        .shift()
        .split(' ')
        .map(x => Number(x));
    let token = arr.shift();

    while (token !== 'End') {
        let [command, index, value] = token.split(' ');

        switch (command) {
            case 'Shoot':
                if (targets[index] !== undefined) {
                    let shoot = targets[index] - value;
                    targets[index] = shoot;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case 'Add':
                if (targets[index] !== undefined) {
                    targets.splice(index, 0, value);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                let damage = 2 * value + 1;
                let startIndex = index - value;
                let endIndex = index + value;
                if (startIndex >= 0 && endIndex > targets.length) {
                    targets.splice(startIndex, damage);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }

        token = arr.shift();
    }
    console.log(targets.join('|'));
}

solve([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
]);
solve(["1 2 3 4 5", "Strike 0 1", "End"]);