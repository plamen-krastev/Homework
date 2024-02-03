function iteration(firstChar, secondChar) {
  let result = '';
  for (i = firstChar + 1; i < secondChar; i++) {
      result += String.fromCharCode(i);
      console.log(i);
  }
  console.log(result);
}

iteration(96, 99);