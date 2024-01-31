function solve(arr) {

    for (let i = 0; i <= arr.length / 2 - 1; i++) {
        let j = arr.length - i - 1; // j - index start from the end
        let temp = arr[i];      // temporary variable for beginning values
        arr[i] = arr[j];        // copy end values to the beginning
        arr[j] = temp;          // copy beginning values to the end
        
      }
      console.log(arr.join(' '));
}


// solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig', 'klm', 'nop']);
solve(['33', '123', '0', 'dd']);