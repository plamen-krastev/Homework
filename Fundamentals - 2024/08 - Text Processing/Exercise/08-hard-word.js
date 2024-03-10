function solve(input) {
    let text = input[0];
    let words = input[1];
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        let curSymbol = text[i];
        if (curSymbol.charCodeAt() === 95) {
            count++;
        } else {
            if (count > 0) {
                let newWord = words.filter(word => word.length === count);
                let stringToReplace = '_'.repeat(count);
                // console.log(`Count: ${count}, index: ${index}, string to replace: ${stringToReplace}, new word: ${newWord}`);
                text = text.replace(stringToReplace, newWord);
                count = 0;
            }
        }
    }
    console.log(text);
}

solve([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    [
        'pie',
        'bring',
        'glad',
        'During',
        'amazing',
        'pharmacist',
        'sprained'
    ]
]);