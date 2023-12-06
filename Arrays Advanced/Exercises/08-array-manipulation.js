function solve(nums, commands) {

    while (commands.length > 0) {

        let curCommand = commands
            .shift()
            .split(' ');
        let command = curCommand.shift();
        let tokens = curCommand.map(Number);

        switch (command) {
            case 'add':
                nums.splice(tokens[0], 0, tokens[1]);
                break;
            case 'addMany':
                let startIndex = tokens.shift();
                for (let i = 0; i < tokens.length; i++) {
                    nums.splice(startIndex, 0, tokens[i]);
                    startIndex++;
                }
                break;
            case 'contains':
                console.log(nums.indexOf(tokens[0]));
                break;
            case 'remove':
                nums.splice(tokens[0], 1);
                break;
            case 'shift':
                let shitfCount = tokens[0];
                for (let i = 1; i <= shitfCount; i++) {
                    let shiftedNum = nums.shift();
                    nums.push(shiftedNum);
                }
                break;
            case 'sumPairs':
                let arrSum = [];
                for (let i = 0; i < nums.length; i += 2) {

                    let curSum = 0;

                    if (nums[i + 1]) {
                        curSum = nums[i] + nums[i + 1];
                    } else {
                        curSum = nums[i];
                    }

                    arrSum.push(curSum);
                }
                nums = [...arrSum];
                break;
            case 'print':
                console.log(`[ ${nums.join(', ')} ]`);
                break;
        }
    }
}

solve([1, 2, 4, 5, 6, 7],
      ['add 1 8', 'contains 1', 'contains 3', 'print']
);

solve([1, 2, 3, 4, 5],
      ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);

solve([1, 2, 3, 4, 5],
  ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print']
);