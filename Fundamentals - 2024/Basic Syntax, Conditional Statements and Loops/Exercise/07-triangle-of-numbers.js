function solve(num) {

    for (let i = 1; i <= num; i++) {
        let numAsString = i.toString() + " ";
        console.log(numAsString.repeat(i));
    }
}

solve(3);
solve(5);
solve(6);