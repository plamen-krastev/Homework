function solve(arr) {

    let countWord = {};

    for (let word of arr) {
        // count word:
        if (countWord.hasOwnProperty(word)) {
            countWord[word] += 1;
        } else {
            countWord[word] = 1;
        }
    }

    // convert to array:
    let entries = Object.entries(countWord);

    // sort array:
    entries.sort((a, b) => b[1] - a[1]);

    // sorted array to object:
    countWord = Object.fromEntries(entries);

    for (let [word, count] of Object.entries(countWord)) {
        console.log(`${word} -> ${count} times`);
    }

}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);

// solve(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);