function wordsTracker(input) {
    let wordsToFind = {};
    let words = input
        .shift()
        .split(' ');
    for (let word of words) {
        wordsToFind[word] = 0;
    }

    for (let i = 0; i < input.length; i++) {
        let curWord = input[i];
        if (wordsToFind.hasOwnProperty(curWord)) {
            wordsToFind[curWord] += 1;
        }
    }

    let resultEntries = Object
        .entries(wordsToFind)
        .sort((a, b) => b[1] - a[1]);

    for (let [word, count] of resultEntries) {
        console.log(`${word} - ${count}`);
    }
}

wordsTracker([
    'this sentence',
    'In',
    'this',
    'sentence',
    'you',
    'have',
    'to',
    'count',
    'the',
    'occurrences',
    'of',
    'the',
    'words',
    'this',
    'and',
    'sentence',
    'because',
    'this',
    'is',
    'your',
    'task'
]);

// wordsTracker([
//     'is the',
//     'first',
//     'sentence',
//     'Here',
//     'is',
//     'another',
//     'the',
//     'And',
//     'finally',
//     'the',
//     'the',
//     'sentence'
// ]);