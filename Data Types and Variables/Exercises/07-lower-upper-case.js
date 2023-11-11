function solve (letter) {
  let alphabet = 'abcdefghijklmnopqrstuvwx';
  let upper = true;
  for (let i = 0; i < alphabet.length; i++) {
    // console.log(alphabet[i]);
    if (letter == alphabet[i]) {
      upper = false;
      // break;
    }    
  }

console.log(upper ? "upper-case" : "lower-case");

}

solve ('L');
solve ('f');