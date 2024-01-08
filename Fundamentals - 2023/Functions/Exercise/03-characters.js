function characters(char1, char2) {

    let code1 = char1.charCodeAt();
    let code2 = char2.charCodeAt();

    let result = [];

    let min = Math.min(code1, code2);
    let max = Math.max(code1, code2);

    for (let i = min + 1; i < max; i++) {
        let curChar = String.fromCharCode(i);
        result.push(curChar);
    }

    console.log(result.join(' '));

}

characters('a', 'd');
characters('#', ':');
characters('C', '#');