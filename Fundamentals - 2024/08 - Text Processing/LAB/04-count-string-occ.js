function solve(text, word) {
    let textToWords = text.split(' ');
    let matchedArr = textToWords.filter(x => x === word);
    let count = matchedArr.length;
    console.log(count);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');