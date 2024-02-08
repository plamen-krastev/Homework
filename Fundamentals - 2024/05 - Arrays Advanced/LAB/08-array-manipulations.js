function arrayManipulation(arr) {

    let numbers = arr
        .shift()
        .split(' ')
        .map(x => Number(x));

    while (arr.length > 0) {
        let [command, numAsStr1, numAsStr2] = arr
            .shift()
            .split(' ');

        switch (command) {
            case 'Add':
                numbers.push(Number(numAsStr1));
                break;
            case 'Remove':
                numbers = numbers.filter(x => x !== Number(numAsStr1));
                break;
            case 'RemoveAt':
                numbers.splice(Number(numAsStr1), 1);
                break;
            case 'Insert':
                numbers.splice(Number(numAsStr2), 0, Number(numAsStr1));
                break;

        }
    }
    console.log(numbers.join(' '));
}

arrayManipulation(
  ['4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3']
);
arrayManipulation(
  ['6 12 2 65 6 42',
  'Add 8',
  'Remove 12',
  'RemoveAt 3',
  'Insert 6 2']
);