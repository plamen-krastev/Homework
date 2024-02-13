function solve(arr) {

    let result = arr
        .shift()
        .split('!');
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let [command, item, itemNew] = tokens;

        let index = 0;
        switch (command) {
            case "Urgent":
                if (!result.includes(item)) {
                    result.unshift(item);
                }
                break;
            case "Unnecessary":
                index = result.indexOf(item);
                if (index !== -1) {
                    result.splice(index, 1);
                }
                break;
            case "Correct":
                index = result.indexOf(item);
                if (index !== -1) {
                    result.splice(index, 1, itemNew);
                }
                break;
            case "Rearrange":
                index = result.indexOf(item);
                let moveItem = result[index];
                if (index !== -1) {
                    result.splice(index, 1);
                    result.push(moveItem);
                }
                break;
        }
    }
    console.log(result.join(', '));
}

solve((["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]));
solve(([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]));