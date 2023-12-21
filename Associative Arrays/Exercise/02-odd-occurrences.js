function solve(string) {
    // create array of words with small letters
    let arrOfWords = string
        .toLowerCase()
        .split(" ");

    let words = new Map();

    // populate Map words with words
    for (let word of arrOfWords) {
        if (words.has(word)) {
            let value = words.get(word);
            value++;
            // words.delete(word);
            words.set(word, value);
        } else {
            words.set(word, 1);
        }
    }

    // select the output in an array
    let finalWords = [];
    for (let [key, value] of words) {
        if (value % 2 != 0) {
            finalWords.push(key);
        }
    }

    //print
    console.log(finalWords.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

solve('Cake IS SWEET is Soft CAKE sweet Food');