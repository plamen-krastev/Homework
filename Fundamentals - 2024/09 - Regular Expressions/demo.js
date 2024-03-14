function demo() {
    let text = 'Peter: 123 Mark: 456';
    let regexp = /([A-Z][a-z]+): (\d+)/g;
    let firstMatch = regexp.exec(text);
    let secondMatch = regexp.exec(text);
    console.log(firstMatch[0]) // Peter: 123
    console.log(firstMatch[1]); // Peter
    console.log(firstMatch[2]); // 123
    console.log(firstMatch);
    console.log(secondMatch);
}
demo();