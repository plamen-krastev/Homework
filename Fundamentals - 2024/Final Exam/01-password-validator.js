function solve(data) {
    let password = data.shift();

    let command = data.shift();

    while (command !== 'Complete') {
        let tokens = command.split(" ");
        let action = tokens.shift();
        if (action === "Make") {
            let [upperOrLower, index] = tokens;
            index = Number(index);
            let curSymbol = password.charAt(index);

            if (upperOrLower === "Upper") {
                let newSymbol = curSymbol.toUpperCase();
                password = password.replace(curSymbol, newSymbol);
            } else if (upperOrLower === "Lower") {
                let newSymbol = curSymbol.toLowerCase();
                password = password.replace(curSymbol, newSymbol);
            }
            console.log(password);
        } else if (action === 'Insert') {
            let [index, symbol] = tokens;
            index = Number(index);
            if (index >= 0 && index < password.length) {
                password = password.slice(0, index) + symbol + password.slice(index);
                console.log(password);
            }
        } else if (action === 'Replace') {
            let [char, number] = tokens;
            number = Number(number);
            let sum = char.charCodeAt() + number;
            let newChar = String.fromCharCode(sum);
            // possible check is needed???
            if (password.includes(char)) {
                while (password.includes(char)) {
                    password = password.replace(char, newChar);
                }
                console.log(password);
            }
        } else if (action === 'Validation') {
            let patternLetterNumber = /[^A-Za-z0-9_]/g;
            let matchLetterNumber = patternLetterNumber.test(password);

            let patternUpper = /[A-Z]/g;
            let matchUpper = patternUpper.test(password);

            let patternLower = /[a-z]/g;
            let matchLower = patternLower.test(password);

            let patternDigit = /[0-9]/g;
            let matchDigit = patternDigit.test(password);

            if (password.length < 8) {
                console.log("Password must be at least 8 characters long!");
            }
            if (matchLetterNumber) {
                console.log("Password must consist only of letters, digits and _!");
            }
            if (!matchUpper) {
                console.log("Password must consist at least one uppercase letter!");
            }
            if (!matchLower) {
                console.log("Password must consist at least one lowercase letter!");
            }
            if (!matchDigit) {
                console.log("Password must consist at least one digit!");
            }  
        }
        command = data.shift();
    }
}

solve([
    'invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'
]);

// solve([
//     '123456789',
//     'Insert 3 R',
//     'Replace 5 15',
//     'Validation',
//     'Make Lower 3',
//     'Complete'
// ]);