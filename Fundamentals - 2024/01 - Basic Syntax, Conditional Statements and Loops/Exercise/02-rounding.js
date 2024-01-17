function solve(num, precisionNum) {

    if (precisionNum > 15) {
        precisionNum = 15;
    }

    let result = parseFloat(num.toFixed(precisionNum));

    console.log(result);

}

solve(3.1415926535897932384626433832795, 2);
solve(10.5, 3);