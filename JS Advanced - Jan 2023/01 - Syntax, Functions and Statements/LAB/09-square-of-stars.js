function solve(num = 5) {
    for (let i = 0; i < num; i++) {
        let symbol = '* ';
        console.log(symbol.repeat(num));
    }
}

solve(1);
solve(2);
solve(5);
// solve(7);
// solve();