function solve(arr) {
    let searchedWords = {};

    // array from searched words:
    let words = arr
        .shift()
        .split(' ');

    // populate object with the words:
    for (let word of words) {
        searchedWords[word] = 0;
    }

    // populating repeated words:
    for (let word of arr) {
        if (searchedWords.hasOwnProperty(word)) {
            searchedWords[word] += 1;
        }
    }

    // sorting:
    let sorted = Object.entries(searchedWords);
    sorted.sort((a, b) => (b[1] - a[1]));

    // print the output:
    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }

}

solve(['this sentence', 
      'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);

solve(['is the', 
      'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);