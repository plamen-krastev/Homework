function buildWall(numbers) {

    let dailyConcrete = [];
    let totalConcrete = 0;

    while (numbers.length > 0) {
        let dayConcrete = 0;

        for (let i = 0; i < numbers.length; i++) {
            let curDay = numbers[i];
            if (curDay === 30) {
                numbers.splice(i, 1);
                i--;
                continue;
            } else {
                dayConcrete += 195;
                curDay++;
                numbers.splice(i, 1);
                numbers.splice(i, 0, curDay);
            }
        }
        
        if (dayConcrete > 0) {
            dailyConcrete.push(dayConcrete);
        }

        totalConcrete += dayConcrete;
    }

    let totalPrice = totalConcrete * 1900;

    console.log(dailyConcrete.join(', '));
    console.log(`${totalPrice} pesos`);
}

buildWall([21, 25, 28]);
buildWall([17]);
buildWall([17, 22, 17, 19, 17]);