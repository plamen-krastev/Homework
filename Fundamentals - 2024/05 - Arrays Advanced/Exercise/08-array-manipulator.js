function solve(numbers, commands) {

    let iteration = commands.length;

    for (let i = 0; i < iteration; i++) {
        let indexOf = 0;
        let token = commands[i].split(' ');
        let command = token[0];
        let idx = Number(token[1]);
        let addNum = Number(token[2]);

        switch (command) {
            case 'add':
                numbers.splice(idx, 0, addNum);
                break;
            case 'addMany':
                let repeat = token.length;
                for (j = 2; j < repeat; j++) {
                    addNum = Number(token[j]);
                    numbers.splice(idx, 0, addNum);
                    idx++;
                }
                break;
            case 'contains':
                indexOf = numbers.indexOf(idx);
                console.log(indexOf);
                break;
            case 'remove':
                numbers.splice(idx, 1);
                break;
            case 'shift':
                for (let j = 0; j < idx; j++) {
                    let tmp = numbers.shift();
                    numbers.push(tmp);
                }
                break;
            case 'sumPairs':
                let iterationCount = numbers.length;
                let tmpArr = [];
                for (let j = 0; j < iterationCount; j += 2) {
                    let num1 = numbers[j];
                    let num2 = numbers[j + 1];
                    let sum = 0;
                    if (!num2) {
                        sum = num1;
                    } else {
                        sum = num1 + num2;
                    }
                    tmpArr.push(sum);
                }
                numbers = [...tmpArr];
                break;
            case 'print':
                console.log(`[ ${numbers.join(', ')} ]`);
                break;
        }
    }
}

solve(
  [1, 2, 4, 5, 6, 7],
  ['add 1 8', 'contains 1', 'contains 3',  'print']
);
solve(
  [1, 2, 3, 4, 5],
  ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);