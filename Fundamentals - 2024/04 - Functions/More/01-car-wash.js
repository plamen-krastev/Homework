function carWash(input) {

    let result = 0;

    while (input.length > 0) {
        let command = input.shift();
        let percent = 0;
        switch (command) {
            case 'soap':
                result += 10;
                break;
            case 'water':
                percent = 0.2 * result;
                result += percent;
                break;
            case 'vacuum cleaner':
                percent = 0.25 * result;
                result += percent;
                break;
            case 'mud':
                percent = 0.1 * result;
                result -= percent;
                break;
        }
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);