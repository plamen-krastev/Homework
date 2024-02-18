function solve(input) {

    let vehicles = input
        .shift()
        .split('>>');

    let pastKM = 0;
    let tax = 0;
    let totalTax = 0;

    for (let vehicle of vehicles) {
        let token = vehicle.split(' ');
        let type = token[0];
        let year = Number(token[1]);
        let km = Number(token[2]);

        switch (type) {
            case 'family':
                kmIndex = Math.floor(km / 3000);
                tax = kmIndex * 12 + (50 - year * 5);
                console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
                totalTax += tax;
                break;
            case 'heavyDuty':
                kmIndex = Math.floor(km / 9000);
                tax = kmIndex * 14 + (80 - year * 8);
                console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
                totalTax += tax;
                break;
            case 'sports':
                kmIndex = Math.floor(km / 2000);
                tax = kmIndex * 18 + (100 - year * 9);
                console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
                totalTax += tax;
                break;
            default:
                console.log('Invalid car type.');
                break;
        }
    }
    console.log(
        `The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`
    );
}

// solve(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']);

solve(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);