// •	Every second lost game, his helmet is broken.
// •	Every third lost game, his sword is broken.
// •	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// •	Every second time, when his shield brakes, his armor also needs to be repaired. 


function solve(losses, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;
    let armorCount = 0;

    for (let i = 2; i <= losses; i++) {
        if (i % 2 == 0) {
            // helmet are broken
            expenses += helmetPrice;
        }
        if (i % 3 == 0) {
            // sword are broken
            expenses += swordPrice;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            // shield are broken
            expenses += shieldPrice;
            armorCount++;
            if (armorCount % 2 == 0) {
                // armor are broken
                expenses += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5); // Gladiator expenses: 16.00 aureus
solve(23, 12.50, 21.50, 40, 200); // Gladiator expenses: 608.00 aureus