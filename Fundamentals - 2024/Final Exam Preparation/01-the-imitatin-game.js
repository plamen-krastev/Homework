function solve(data) {
    let encryptedMessage = data.shift();
    for (let message of data) {
        if (message === 'Decode') {
            console.log(`The decrypted message is: ${encryptedMessage}`);
            break;
        }
        let tokens = message.split('|');
        let command = tokens.shift();
        switch (command) {
            case 'Move':
                let numToSlice = Number(tokens[0]);
                let tmpString = encryptedMessage.slice(0, numToSlice);
                encryptedMessage = encryptedMessage.slice(numToSlice);
                encryptedMessage += tmpString;
                break;
            case 'Insert':
                let index = Number(tokens[0]);
                let str = tokens[1];
                encryptedMessage = encryptedMessage.slice(0, index) + str + encryptedMessage.slice(index);
                break;
            case 'ChangeAll':
                let [substring, replacement] = tokens;
                while (encryptedMessage.includes(substring)) {
                    encryptedMessage = encryptedMessage.replace(substring, replacement);
                }
                break;
        }
    }
}

solve(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);

solve(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']);