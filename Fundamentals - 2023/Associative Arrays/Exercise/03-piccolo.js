function solve(arr) {
    //creating a Set
    let parking = new Set();

    while (arr.length > 0) {
        let tokens = arr.shift();
        let [command, carNumber] = tokens.split(', ');
        //populating (addind/removing)
        if (command == 'IN') {
            parking.add(carNumber);
            // console.log(carNumber, "added");
        } else if (command == 'OUT') {
            parking.delete(carNumber);
            // console.log(carNumber, "deleted");
        }
    }

    if (parking.size == 0) {
        console.log('Parking Lot is Empty');
    } else {
        // convert Set to array
        let parkingArray = Array
            .from(parking)
            .sort((a, b) => a.localeCompare(b));
        console.log(parkingArray.join('\n'));
    }

}

solve(['IN, CA2844AA',
      'IN, CA1234TA',
      'OUT, CA2844AA',
      'IN, CA9999TT',
      'IN, CA2866HI',
      'OUT, CA1234TA',
      'IN, CA2844AA',
      'OUT, CA2866HI',
      'IN, CA9876HH',
      'IN, CA2822UU']
);

// solve(['IN, CA2844AA',
//       'IN, CA1234TA',
//       'OUT, CA2844AA',
//       'OUT, CA1234TA']
// );