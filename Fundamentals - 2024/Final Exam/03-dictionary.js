function solve(data) {

    let words = {}; // words = { word: [] };
    let testWords = [];

    for (let command of data) {
        if (command === "Hand Over") {
            let keys = Object.keys(words);
            console.log(keys.join(' '));
            break;
        } else if (command === "Test") {
            let keys = Object.keys(words);
            let values = Object.values(words);
            for (let word of testWords) {
                if (keys.includes(word)) {
                    console.log(`${word}:`);
                    for (let definition of words[word]) {
                        console.log(` -${definition}`);
                    }
                }
            }
            break;
        }
        let wordAndDef = command.split(' | ');
        // console.log(words);
        for (let i = 0; i < wordAndDef.length; i++) {
            let tokens = wordAndDef[i].split(': ');
            // console.log(tokens);
            if (tokens.length === 1) {
                testWords.push(tokens[0]);
            } else {
                let word = tokens[0];
                let definition = tokens[1];
                if (!words.hasOwnProperty(word)) {
                    words[word] = [];
                }
                words[word].push(definition);
            }
        }
    }
    // console.log(words); console.log(testWords);
}

solve(["programmer: an animal, which turns coffee into code | developer: a magician", "fish | domino", "Hand Over"]);

solve([
    "care: worry, anxiety, or concern | care: a state of mind in which one is troub" +
            "led | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"
]);

// solve([
//     "tackle: the equipment required for a task or sport | code: write code for a co" +
//             "mputer program | bit: a small piece, part, or quantity of something | tackle: " +
//             "make determined efforts to deal with a problem | bit: a short time or distance",
//     "bit | code | tackle",
//     "Test"
// ]);