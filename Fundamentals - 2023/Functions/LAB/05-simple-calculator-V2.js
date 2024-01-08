function simpleCalculator(a, b, operator) {

    // declare human readable variables, containing arrow functions:
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    // create an array in order to get functions by the index
    let operations = [multiply, divide, add, subtract];

    // let result;
    // let operation;

    let index;

    // switch (operator) {
    //     case 'multiply':
    //         index = 0;
    //         // operation = operations[0];
    //         // result = operation(a, b);
    //         break;
    //     case 'divide':
    //         index = 1;
    //         // operation = operations[1];
    //         // result = operation(a, b);
    //         break;
    //     case 'add':
    //         index = 2;
    //         // operation = operations[2];
    //         // result = operation(a, b);
    //         break;
    //     case 'subtract':
    //         index = 3;
    //         // operation = operations[3];
    //         // result = operation(a, b);
    //         break;
    // }

    let operatiosNames = ['multiply', 'divide', 'add', 'subtract']; // as string

    for (i = 0; i < operatiosNames.length; i++) {
        if (operatiosNames[i] == operator) {
            index = i; // we can remove switch
        }
    }


    // result = operation(a, b);

    let operation = operations[index];

    console.log(operation(a, b));
    // console.log(operations[index](a,b)); // do the same as above
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');