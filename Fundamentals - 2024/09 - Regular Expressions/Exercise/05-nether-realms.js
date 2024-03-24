function netherRealms(data) {
    let patternNumbers = /[-+]?\d+(\.\d+)?/g;
    let patternHealth = /[^+-.*/\d]/g;
    let patternDamage = /[*/]/g;
    let demons = data.split(',');
    let demonsArray = [];
    for (let demon of demons) {
        demon = demon.trim();
        if (!demon.includes(' ')) {
            let health = 0;
            let damage = 0;
            let curChar = '';
            let curNumber;
            let curOperation;
            while ((curNumber = patternNumbers.exec(demon)) !== null) {
                damage += Number(curNumber[0]);
            }
            while ((curChar = patternHealth.exec(demon))) {
                health += curChar[0].charCodeAt();
            }
            while ((curOperation = patternDamage.exec(demon)) !== null) {
                if (curOperation[0] === '*') {
                    damage *= 2;
                } else if (curOperation[0] === '/') {
                    damage /= 2;
                }
            }
            let curDemon = [demon, health, damage];
            demonsArray.push(curDemon);
        }
    }
    demonsArray.sort();
    for (let [name, health, damage] of demonsArray) {
        console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`);
    }
}

netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
netherRealms('Gos/ho');
netherRealms('M3ph-0.5s-0.5t0.0**   , M2ph-0.5s-0.5t0.0**');