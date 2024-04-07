function solve(srt) {
    const letterPattern = /[A-Za-z0-9]+/g;
    const result = srt
        .match(letterPattern)
        .join(', ')
        .toUpperCase();
    console.log(result);
}

solve('Hi, how are you?');
solve('hello');