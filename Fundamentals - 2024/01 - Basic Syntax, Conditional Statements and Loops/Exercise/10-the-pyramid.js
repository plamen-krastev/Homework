function solve(base, increment) {
    let stone = 0; // inner material
    let marble = 0; // outer material
    let lapisLazuli = 0; // every fifth layer from the bottom
    let gold = 0; // top floor material
    let floors = 0;
    let heigth = 0;

    // getting floors:
    for (let i = base; i > 0; i -= 2) {
        floors++;
    }

    for (let i = 1; i <= floors; i++) {
        let outerFormula = 4 * base - 4;
        let innerFormula = base * base - outerFormula;
        heigth += increment;

        if (i === floors) {
            gold = base * base * increment;
        } else if (i % 5 === 0) {
            stone += innerFormula * increment;
            lapisLazuli += outerFormula * increment;
        } else {
            stone += innerFormula * increment;
            marble += outerFormula * increment;
        }
        base -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    if (heigth < 1 && heigth > 0) {
        console.log(`Final pyramid height: 1`);
    } else {
        console.log(`Final pyramid height: ${Math.floor(heigth)}`);
    }
}

solve(11, 1);
// solve(11, 0.75);
// solve(12, 1);
// // solve(23, 0.5);
// // solve(0, 1.12);
// // solve(5, 0.1);