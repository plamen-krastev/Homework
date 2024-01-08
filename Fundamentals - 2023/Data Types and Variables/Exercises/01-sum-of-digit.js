function sum (num) {
  // we can conver num as string or % 10
  let sum = 0;
  while (num != 0) {
    let digit = num % 10;
    num -= digit;
    num /= 10;
    sum += digit;
  }
  console.log(sum);
}

sum (245678); // 32
sum (97561); // 28
sum (543); // 12