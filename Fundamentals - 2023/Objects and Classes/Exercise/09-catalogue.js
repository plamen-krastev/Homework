function catalogue(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    let previousFirstLetter = '';

    for (let element of arr) {
        let curEl = element.split(' : ');
        let productName = curEl[0];
        let productPrice = Number(curEl[1]);

        let firstLetter = productName[0];

        if (firstLetter == previousFirstLetter) {
            console.log(`  ${productName}: ${productPrice}`);

        } else {
            console.log(`${firstLetter}\n  ${productName}: ${productPrice}`);
        }
        previousFirstLetter = firstLetter;
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