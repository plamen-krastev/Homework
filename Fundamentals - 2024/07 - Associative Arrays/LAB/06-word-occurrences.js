function solve(input) {

    let words = {};
    for (let word of input) {
        if (!words.hasOwnProperty(word)) {
            words[word] = 1;
        } else {
            words[word] += 1;
        }
    }
    let result = Object
        .entries(words)
        .sort((a, b) => b[1] - a[1]);

    for (let [word, count] of result) {
        console.log(`${word} -> ${count} times`);
    }
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);

// solve(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);