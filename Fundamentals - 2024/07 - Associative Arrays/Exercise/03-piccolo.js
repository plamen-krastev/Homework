function solve(input) {
    let parking = [];

    for (let i = 0; i < input.length; i++) {
        let [direction, number] = input[i].split(', ');

        if (direction === 'IN') {
            if (!parking.includes(number)) {
                parking.push(number);
            }
        } else {
            if (parking.includes(number)) {
                let index = parking.indexOf(number);
                parking.splice(index, 1);
            }
        }
    }
    parking.sort((a, b) => a.localeCompare(b));
    if (parking.length > 0) {
        console.log(parking.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

// solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);