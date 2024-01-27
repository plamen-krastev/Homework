function solve(input) {

    let maxIndex = input.length - 1;
    let reversedStr = '';

    for (let i = maxIndex; i >= 0; i--) {
        reversedStr += input[i];
    }
    console.log(reversedStr);

}

function solution(input) {
    let result = input
        .split('')
        .reverse()
        .join('');
    console.log(result);
}

solve('Hello');
solve('SoftUni');
solve('1234');
solution('1234');