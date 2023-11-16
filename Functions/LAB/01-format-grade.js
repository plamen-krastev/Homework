function solve(grade) {
    if (grade >= 2 && grade < 3) {
        console.log("Fail (2)");
    } else if (grade < 3.5) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.5) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.5) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade <= 6) {
        console.log(`Excellent`);
    }
}

solve(3.5);
solve(4.50);
solve(2.999999999999999);
solve(6);