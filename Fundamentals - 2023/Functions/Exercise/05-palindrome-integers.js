function palindrome(arr) {

    // for (i = 0; i < arr.length; i++) {
    //     let curNumAsStr = String(arr[i]);
    //     let reverseStr = '';

    //     for (j = curNumAsStr.length - 1; j >= 0; j--) {
    //         let cur = curNumAsStr[j];
    //         reverseStr += cur;
    //     }

    //     let isPalindrome = curNumAsStr == reverseStr;
    //     console.log(isPalindrome);

    // }

for (let num of arr) {
    let reverse = num.toString().split('').reverse().join('');
    console.log(num == reverse);
}
}

palindrome ([123,323,421,121]);
// palindrome ([32,2,232,1010]);