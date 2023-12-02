function solve(arr) {

    let kElements = arr.shift();
    console.log(arr.slice(0, kElements).join(' '));
    console.log(arr.slice(arr.length - kElements).join(' '));

}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);