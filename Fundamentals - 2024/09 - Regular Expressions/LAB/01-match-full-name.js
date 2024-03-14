function solve(text) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = [];

    let match = regex.exec(text);
    while (match !== null) {
        result.push(match[0]);
        match = regex.exec(text);
    }
    console.log(result.join(' '));
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");