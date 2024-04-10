function solve(data) {
    let num = 1;
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let command = data[i];
        if (command === 'add') {
            result.push(num);
            num++;
        } else if (command === 'remove') {
            result.pop();
            num++;
        }
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
