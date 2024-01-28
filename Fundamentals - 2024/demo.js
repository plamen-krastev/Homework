function ladybugs(arr) {

    let fieldSize = arr[0]; // getting field size
    let ladybugsIndex = arr[1].split(" ").map(Number); // getting ladybugs starting positions
    let field = []; // create field

    // populating a field:
    for (let i = 0; i < fieldSize; i++) {
        if (ladybugsIndex.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (let i = 2; i < arr.length; i++) {
        let command = arr[i];
        let commandArr = command.split(" ");

        let startIndex = Number(commandArr[0]);
        let direction = commandArr[1];
        let flyLength = Number(commandArr[2]);

        // checking if there is ladybug in the current index:
        if (!field[startIndex]) {
            continue;
        }

        field[startIndex] = 0; // ladybug took off

        if (direction == 'left') {
            let newIndex = startIndex - flyLength;

            // checking if new index are out of range:
            if (newIndex >= 0) {
                while (field[newIndex] == 1) {
                    newIndex -= flyLength;
                }

                if (newIndex >= 0) {
                    field[newIndex] = 1;
                }
            }
        }

        if (direction == 'right') {
            let newIndex = startIndex + flyLength;

            // checking if new index are out of range:
            if (newIndex < field.length) {
                while (field[newIndex] == 1) {
                    newIndex += flyLength;
                }

                if (newIndex < field.length) {
                    field[newIndex] = 1;
                }
            }
        }
    }
    console.log(field.join(" "));
}

// ladybugs([3, '0 1', '0 right 1', '2 right 1']);
// ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([5, '3', '3 left 2', '1 left -2']);