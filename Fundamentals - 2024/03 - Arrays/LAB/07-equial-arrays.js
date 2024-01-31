function solve(arr1, arr2) {
    let isEqual = true;
    let index = 0;
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        let curValue1 = arr1[i];
        let curValue2 = arr2[i];

        if (curValue1 !== curValue2) {
            isEqual = false;
            index = i;
            break;
        }
    }

    if (isEqual) {
        for (let strNum of arr1) {
            let number = Number(strNum);
            sum += number;
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }

}

solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);
solve(['1'], ['10']);