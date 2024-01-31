function solve(arr) {
    let fieldSize = arr.shift();
    let ladybugs = arr
        .shift()
        .split(' ');
    let field = [];

    // create field
    for (i = 0; i < fieldSize; i++) {
        field.push(0);
    }

    // populate field
    for (let i = 0; i < ladybugs.length; i++) {
        let curIndex = Number(ladybugs[i]);
        if (curIndex < fieldSize) {
            field.splice(curIndex, 1, 1);
        }
    }

    // console.log(field);

    while (arr.length > 0) {
        let tokens = arr
            .shift()
            .split(' ');
        let index = Number(tokens[0]);
        let direction = tokens[1];
        let flyingDistance = Number(tokens[2]);

        // checking if there is ladybug in the current index
        let checkLadybug = field[index];
        if (!checkLadybug) {
            continue;
        }

        // ladybug took off from the current index
        field[index] = 0;

        if (direction === "right") {
            let landingIndex = index + flyingDistance;

            // checking if new index are out of range
            if (landingIndex < field.length) {
                while (field[landingIndex] === 1) {
                    landingIndex += flyingDistance;
                }

                if (landingIndex < field.length) {
                    field[landingIndex] = 1;
                }
            }
        }
        if (direction === "left") {
            let landingIndex = index - flyingDistance;

            // checking if new index are out of range
            if (landingIndex >= 0) {
                while (field[landingIndex] === 1) {
                    landingIndex -= flyingDistance;
                }

                if (landingIndex >= 0) {
                    field[landingIndex] = 1;
                }
            }
        }

    }
    console.log(field.join(' '));
}

solve([3, '0 1', '0 right 1', '2 right 1']);
// solve([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// solve([5, '3', '3 left 2', '1 left -2']);
