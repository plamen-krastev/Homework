function solve(arr) {

    let result = 0;

    let split = arr.split(' ');

    for (let number of split) {

        result = result ^ Number(number);
        // console.log(result);
    }
    console.log(result);

}

solve('1 1 2 1 2 3 2 4 2 3 1');
solve('2 2 5 7 5 7 2 5 7 5 2');
