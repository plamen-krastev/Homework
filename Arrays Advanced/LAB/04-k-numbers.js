function solve(num1, num2) {

    let arr = [1];

    for (current = 1; current < num1; current++) {

        let start = Math.max(0, current - num2);
        let end = current - 1;

        let sum = 0;

        for (i = start; i <= end; i++) {
            sum += arr[i];
        }

        arr[current] = sum;
    }

    console.log(arr.join(' '));
}

solve(6, 3);
solve(8, 2);