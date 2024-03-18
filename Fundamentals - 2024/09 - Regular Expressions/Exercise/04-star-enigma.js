function starEnigma(data) {
    let messageCount = Number(data.shift());
    let patternStar = /[SsTtAaRr]/;
    let patternFinal = /[@](?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>[0-9]+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<army>[0-9]+)/;

    let attackedPlanet = {};
    let destroyedPlanet = {};

    for (let i = 0; i < messageCount; i++) {
        let curString = data[i];
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

        let message = patternFinal.exec(decryptedMessage);

        if (patternFinal.test(decryptedMessage)) {
            if (message.groups.type === 'A') {
                attackedPlanet[message.groups.name] = message.groups.type;
            } else if (message.groups.type === 'D') {
                destroyedPlanet[message.groups.name] = message.groups.type;
            }
        }
    }
    let finalAttachedPlanet = Object
        .keys(attackedPlanet)
        .sort((a, b) => a.localeCompare(b));
    let finalDestroyedPlanet = Object
        .keys(destroyedPlanet)
        .sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${finalAttachedPlanet.length}`);
    if (finalAttachedPlanet.length > 0) {
        for (let planet of finalAttachedPlanet) {
            console.log(`-> ${planet}`);
        }
    }
    console.log(`Destroyed planets: ${finalDestroyedPlanet.length}`);
    if (finalDestroyedPlanet.length > 0) {
        for (let planet of finalDestroyedPlanet) {
            console.log(`-> ${planet}`);
        }
    }
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);

starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);