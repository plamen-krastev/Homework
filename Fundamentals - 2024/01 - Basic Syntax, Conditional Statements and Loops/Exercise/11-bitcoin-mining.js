function solve(arr) {
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;

    let money = 0;
    let days = 0;
    dayOfTheFisrtBitcoin = 0;

    let exchange = bitcoinPrice / goldPrice;

    for (let i = 0; i < arr.length; i++) {
        let curYield = arr[i];
        let curMoney = curYield * goldPrice;
        days++;
        if (days % 3 === 0) {
            curMoney *= 0.7;
        }
        money += curMoney;
        if (money >= bitcoinPrice && dayOfTheFisrtBitcoin === 0) {
            dayOfTheFisrtBitcoin = days;
        }
    }

    let bitcoins = money / bitcoinPrice;
    let moneyLeft = money % bitcoinPrice;

    console.log(`Bought bitcoins: ${Math.floor(bitcoins)}`);
    if (bitcoins >= 1) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFisrtBitcoin}`);
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);

}

solve([100, 200, 300]);
solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);