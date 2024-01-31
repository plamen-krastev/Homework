function solve(arr1, arr2) {

    for (let word1 of arr1) {
        let isInclude = false;
        isInclude = arr2.includes(word1);

        if (isInclude) {
            console.log(word1);
        }
    }
}

solve(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2']
);
solve(
  ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
  ['s', 'o', 'c', 'i', 'a', 'l']
);