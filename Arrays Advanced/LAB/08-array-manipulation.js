function solve(input) {

    let arr = input
        .shift()
        .split(" ")
        .map(Number);

    let result = [];

    for (let i = 0; i < input.length; i++) {
        let cur = input[i];

        let arrCommand = cur.split(" ");

        command = arrCommand.shift();
        // console.log(command, arrCommand);

        let num = arrCommand.map(Number);
        // console.log(num);

        switch (command) {
            case "Add":
                arr.push(num[0]);
                break;
            case "Remove":

                let j = 0;
                let target = num[0];

                while (j < arr.length) {
                    if (arr[j] === target) {
                        arr.splice(j, 1);
                    } else {
                        ++j;
                    }
                }

                break;
            case "RemoveAt":
                arr.splice(num[0], 1);
                break;
            case "Insert":
                arr.splice(num[1], 0, num[0]);
                break;

        }

    }

    return arr.join(' ');

}

console.log(solve(['4 19 2 2 2 53 6 43 2 2 2',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']));
console.log(solve(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']));