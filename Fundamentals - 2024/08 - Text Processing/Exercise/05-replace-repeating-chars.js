function solve(chars) {
    let prevChar = '';
    let result = '';

    for (let char of chars) {
        if (prevChar.length === 0) {
            result += char;
        } else if (prevChar !== char) {
            result += char;
        }
        prevChar = char;
    }
    console.log(result);
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');