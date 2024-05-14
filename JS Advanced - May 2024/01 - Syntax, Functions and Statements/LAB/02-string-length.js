function solve(word1, word2, word3) {
  const totalLength = word1.length + word2.length + word3.length;
  const average = Math.floor(totalLength / 3);

  console.log(totalLength);
  console.log(average);
}

solve("chocolate", "ice cream", "cake");
solve("pasta", "5", "22.3");
