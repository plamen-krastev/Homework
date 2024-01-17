function solve(srting1, char, string2) {

    let stringForComparation = '';

    for (i = 0; i < srting1.length; i++) {
        let curChar = srting1[i];
        if (curChar === '_') {
            curChar = char;
        }
        stringForComparation += curChar;
    }

    if (stringForComparation === string2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');