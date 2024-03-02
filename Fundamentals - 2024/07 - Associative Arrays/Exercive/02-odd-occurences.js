function solve(str) {
    let occurrences = {};
    let words = str
        .toLowerCase()
        .split(' ');

    for (let word of words) {
        if (!occurrences.hasOwnProperty(word)) {
            occurrences[word] = 1;
        } else {
            occurrences[word] += 1;
        }
    }

    let occurrencesEntries = Object
        .entries(occurrences)
        .sort((a, b) => b[1] - a[1]);

    let result = [];

    for (let [word, occurrence] of occurrencesEntries) {
        if (occurrence % 2 !== 0) {
            result.push(word);
        }
    }
    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');