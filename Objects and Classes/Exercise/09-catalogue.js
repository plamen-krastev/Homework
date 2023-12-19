function catalogue(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    let previosFisrtLetter = '';

    for (let element of arr) {
        let curEl = element.split(' : ');
        let productName = curEl[0];
        let productPrice = Number(curEl[1]);

        let fisrtLetter = productName[0];

        if (fisrtLetter == previosFisrtLetter) {
            console.log(`  ${productName}: ${productPrice}`);

        } else {
            console.log(`${fisrtLetter}\n  ${productName}: ${productPrice}`);
        }

        previosFisrtLetter = fisrtLetter;
    }
}

catalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10'
  ]
);

// catalogue([
//   'Omlet : 5.4',
//   'Shirt : 15',
//   'Cake : 59'
//   ]
// );