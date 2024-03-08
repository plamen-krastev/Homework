function solve(text) {
    let words = text.split(' ');
    let filteredWords = words.filter(
        word => word.startsWith('#') && word.length > 1
    );

    for (let word of filteredWords) {
        let pattern = /\b[A-Za-z]+\b/;
        if (pattern.test(word)) {
            console.log(word.slice(1));
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');