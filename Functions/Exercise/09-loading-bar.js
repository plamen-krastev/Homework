function solve(num) {

    if (num != 100) {
        let rep = num / 10;
        let symbol1 = '%';
        let rep2 = 10 - rep;
        let symbol2 = '.';

        console.log(`${num}% [${symbol1.repeat(rep)}${symbol2.repeat(rep2)}]`);
        console.log("Still loading...");

    } else {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }

}

solve (30);
solve (50);
solve (100);