function solve(arr) {
    let maxArr = [];
    for (let i = 0; i < arr.length; i++) {

        let compareNum = arr[i];
        let isBigger = true;

        for (let j = i + 1; j < arr.length; j++) {

            let curNum = arr[j];

            if (compareNum <= curNum) {
                isBigger = false;
                break;
            }

        }
        if (isBigger) {
            maxArr.push(compareNum);
        }
    }
    console.log(maxArr.join(' '));
}

solve ([1, 4, 3, 2]);
solve ([14, 24, 3, 19, 15, 17]);
solve ([41, 41, 34, 20]);
solve ([27, 19, 42, 2, 13, 45, 48]);