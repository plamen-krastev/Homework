function listOfProducts(arr) {

    arr.sort((a, b) => a.localeCompare(b, 'en', {sensitivity: 'variant'}));

    for (let i = 0; i < arr.length; i++) {

        // let curGoods = arr[i];
        // let listNum = i + 1;

        console.log(`${i + 1}.${arr[i]}`);
    }

}

// listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);