function equal(arr1, arr2) {

    let sum = 0;
    let isEqual = true;
    let index = 0;

    for (let i = 0; i < arr1.length; i++) {
        let num1 = Number(arr1[i]);
        let num2 = Number(arr2[i]);

        if (num1 == num2) {
            sum += num1;
        } else {
            isEqual = false;
            index = i;
            break;
        }
    }

    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }

}

equal (['10','20','30'], ['10','20','30']);
equal (['1','2','3','4','5'], ['1','2','4','4','5']);
equal (['1'], ['10']);