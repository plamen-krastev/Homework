function solve(data) {
    data
        .sort((a, b) => a.localeCompare(b))
        .forEach((x, i) => console.log(`${i + 1}.${x}`));
}

solve(["John", "Bob", "Christina", "Ema"]);