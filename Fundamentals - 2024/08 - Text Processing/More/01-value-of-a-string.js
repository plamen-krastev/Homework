function solve(input) {
    let stringToSum = input[0];
    let symbols = stringToSum.split('');
    let lowerOrUpper = input[1];
    let sum = 0;

    switch (lowerOrUpper) {
        case 'LOWERCASE':
            let lowerCaseSymbols = symbols.filter(
                s => s.charCodeAt() >= 97 && s.charCodeAt() <= 122
            );
            for (let symbol of lowerCaseSymbols) {
                let curNum = symbol.charCodeAt();
                sum += curNum;
            }
            break;
        case 'UPPERCASE':
            let upperCaseSymbols = symbols.filter(
                s => s.charCodeAt() >= 65 && s.charCodeAt() <= 90
            );
            for (let symbol of upperCaseSymbols) {
                let curNum = symbol.charCodeAt();
                sum += curNum;
            }
            break;
    }
    console.log(`The total sum is: ${sum}`);
}

solve(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);

solve(['AC/DC', 'UPPERCASE']);