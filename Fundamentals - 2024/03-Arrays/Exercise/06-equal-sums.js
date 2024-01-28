function solve(arr) {
    let leftSum = 0;
    let rightSum = 0;

    let isEqual = false;
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        let curEl = arr[i];

        if (arr.length === 1) {
            isEqual = true;
            break;
        } else if (i === 0) {
            // calculate right site
            for (let j = i + 1; j < arr.length; j++) {
                curNum = arr[j];
                rightSum += curNum;
            }
        } else if (i === arr.length - 1) {
            // calculate left site
            for (let j = i - 1; j >= 0; j--) {
                curNum = arr[j];
                leftSum += curNum;
            }
        } else {
            // calculate both side
            for (let j = i + 1; j < arr.length; j++) {
                // right site
                curNum = arr[j];
                rightSum += curNum;
            }

            for (let j = i - 1; j >= 0; j--) {
                // left site
                curNum = arr[j];
                leftSum += curNum;
            }
        }

        if (leftSum === rightSum) {
            isEqual = true;
            index = i;
            break;
        }

        leftSum = 0;
        rightSum = 0;
    }

    if (isEqual) {
        console.log(index);
    } else {
        console.log('no');
    }

}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
// solve([0, 0, 0, 1]);