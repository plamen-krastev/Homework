function starEnigma(data) {
    let messageCount = Number(data.shift());
    let patternStar = /[SsTtAaRr]/;
    let patternFinal = /[@](?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>[0-9]+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<army>[0-9]+)/;
    let messages = [];
    let attackedPlanet = 0;
    let destroyedPlanet = 0;

    for (let i = 0; i < messageCount; i++) {
        let curString = data[i];
        // console.log(curString);
        let starCount = 0;
        let decryptedMessage = '';

        for (let symbol of curString) {
            if (patternStar.test(symbol)) {
                starCount++;
            }
        }
        for (let symbol of curString) {
            let curChartCode = symbol.charCodeAt();
            curChartCode -= starCount;
            let newSymbol = String.fromCharCode(curChartCode);
            decryptedMessage += newSymbol;
        }
        // console.log(decryptedMessage);
        let message = patternFinal.exec(decryptedMessage);
        // console.log(message.groups.name, message.groups.type);
        if (message.groups.type === 'A') {
          attackedPlanet++;
        } else if (message.groups.type === 'D') {
          destroyedPlanet++;
        }
        let nameAndType = [message.groups.name, message.groups.type];
        messages.push(nameAndType);
    }
    let result = messages.sort((a, b) => a[1].localeCompare(b[1]));

    for (let i = 0; i < result.length; i++) {

    }
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);

// starEnigma(
//     ['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']
// );