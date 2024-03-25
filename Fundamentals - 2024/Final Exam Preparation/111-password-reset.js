function passwordReset(data) {

    let password = data.shift();
    let command = data.shift();

    while (command !== 'Done') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        switch (action) {
            case 'TakeOdd':
                let oddIndexSymbols = '';
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        oddIndexSymbols += password[i];
                    }
                }
                password = oddIndexSymbols;
                console.log(password);
                break;
            case 'Cut':
                let [index, length] = tokens.map(Number);
                password = password.slice(0, index) + password.slice(index + length);
                console.log(password);
                break;
            case 'Substitute':
                let [substring, substitute] = tokens;
                if (password.includes(substring)) {
                    while (password.includes(substring)) {
                        password = password.replace(substring, substitute);
                    }
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }
        command = data.shift();
    }
    console.log(`Your password is: ${password}`);
}

passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);

passwordReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
]);