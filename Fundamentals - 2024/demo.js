function solve(words, text) {

    words = words.split(', ');

    for (let word of words) {
        let count = word.length;
        let starTemplate = '*'.repeat(count);

        text = text.replace(starTemplate, word);
    }
    console.log(text);

}

// solve('great', 'softuni is ***** place for learning new programming languages');
solve(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
);

let arr = [];
arr[-5] = 100;
array = [];
console.log(arr);
console.log(arr.length);
console.log(array);
console.log(array.length);