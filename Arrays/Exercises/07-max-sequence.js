function maxSeq(arr) {

    let maxArr = [];
    let maxArrFinal = [];
    let matchCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let compareNum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let num = arr[j];
            if (num != compareNum) {
                matchCount = 0;
                break;
            } else if (num == compareNum) {
                maxArr.push(compareNum);

                i++;

                if (matchCount == 0) {
                    maxArr.push(num);
                }
                matchCount++;
            }
        }
        if (maxArr.length > maxArrFinal.length) {
            maxArrFinal = [...maxArr];
            maxArr = [];
        } else {
            maxArr = [];
        }

    }
    console.log(maxArrFinal.join(" "));
}

maxSeq ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSeq ([1, 1, 1, 2, 3, 1, 3, 3]);
maxSeq ([4, 4, 4, 4]);
maxSeq ([0, 1, 1, 5, 2, 2, 6, 3, 3]);