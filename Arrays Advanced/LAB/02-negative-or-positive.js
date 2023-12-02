function solve(arr) {
    result = [];

    for (let i = 0; i < arr.length; i++) {
        let curNum = Number(arr[i]);

        if (curNum < 0) {
            result.unshift(curNum);

        } else {
            result.push(curNum);
        }

    }

    console.log(result.join("\n"));
}

solve(['7', '-2', '8', '9']);
solve(['3', '-2', '0', '-1']);