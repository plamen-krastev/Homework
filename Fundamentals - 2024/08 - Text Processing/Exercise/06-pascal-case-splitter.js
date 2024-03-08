function solve(input) {
    let words = "";

    for (let char of input) {
        let number = char.charCodeAt();
        if (number >= 65 && number <= 90) {
            words += ', ' + char;
        } else {
            words += char;
        }

    }
    words = words
        .split(', ')
        .filter(word => word.length > 0);
    console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');