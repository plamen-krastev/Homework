function solve(words, text) {

    let wordsToReveal = words.split(', ');

    for (let word of wordsToReveal) {
        let searchString = '*'.repeat(word.length);
        text = text.replace(searchString, word);
    }
    console.log(text);
}

solve('great', 'softuni is ***** place for learning new programming languages');

solve(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
);