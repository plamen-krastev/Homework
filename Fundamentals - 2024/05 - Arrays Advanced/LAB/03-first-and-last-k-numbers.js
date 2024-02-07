function solve(arr) {
    let firstKElements = [];
    let lastKElements = [];

    let elements = arr.shift();

    firstKElements = arr.slice(0, elements);
    lastKElements = arr.slice(arr.length - elements);

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));

}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);