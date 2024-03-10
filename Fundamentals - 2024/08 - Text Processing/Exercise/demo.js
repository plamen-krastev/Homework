function solve(input) {
    let textAsWords = input[0].split(' ');
    let replaceWords = input[1];

    for (let i = 0; i < textAsWords.length; i++) {
        let curWordForReplace = textAsWords[i];
        let word = '';

        if (curWordForReplace[0].charCodeAt() === 95) {
            let length = curWordForReplace.length;
            let lastSymbol = curWordForReplace[length - 1];
            if (lastSymbol.charCodeAt() !== 95) {
                for (let newWord of replaceWords) {
                    let newWordLength = newWord.length;
                    if (newWordLength === length - 1) {
                        word = newWord + lastSymbol;
                        textAsWords[i] = word;
                    }
                }
            } else {
                for (let newWord of replaceWords) {
                    let newWordLength = newWord.length;
                    if (newWordLength === length) {
                        word = newWord;
                        textAsWords[i] = word;
                    }
                }
            }
        }
    }
    console.log(textAsWords.join(' '));
}


solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);