function smallestTwoNumbers(data) {
  data.sort((a, b) => a - b);
  console.log(`${data[0]} ${data[1]}`);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);