function solve(arr) {

    let result = [];

    while (arr.length > 0) {

        curString = arr
            .shift()
            .split(' ');

        let name = curString[0];
        let comparedStr = curString[2];

        if (comparedStr == 'going!') {
            if (!result.includes(name)) {
                result.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (result.includes(name)) {
                let index = result.indexOf(name);
                result.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(result.join('\n'));
}

solve(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
// solve(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);