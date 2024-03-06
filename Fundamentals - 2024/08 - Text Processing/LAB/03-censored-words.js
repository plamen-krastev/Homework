function solve(text, word) {
    // let censored = text.replace(word, repeat(word));
    while (text.includes(word)) {
      text = text.replace(word, repeat(word));
    }

    console.log(text);
    
    function repeat(word) {
        let count = word.length;
        let symbol = '';
        for (i = 0; i < count; i++) {
            symbol += '*';
        }
        return symbol;
    }
}

solve('A small sentence with some words small', 'small');
solve('Find the hidden word', 'hidden');