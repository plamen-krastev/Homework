function demo() {
    let text = 'Peter: 123 MMllLark: 456222';
    let regexp = /([A-Z][a-z]+): (\d+)/g;
    let matches = text.match(regexp);
    console.log(matches.length); // 2
    console.log(matches[0]); // Peter: 123
    console.log(matches[1]); // Mark: 456
    console.log(matches);
}

demo();