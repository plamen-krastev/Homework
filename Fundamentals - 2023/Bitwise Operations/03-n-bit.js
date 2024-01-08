function solve(number, position) {

    number = number >> position;

    let digit = number % 2;

    console.log(digit);

}

solve(2145, 5);
solve(512, 0);
solve(111, 8);
solve(255, 7);