function solve(data) {
  let string = data[0];

  let digitPattern = /\d+/g;
  let emojiPattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;

  let digitMatch = string.match(digitPattern);
  let digitAsString = digitMatch.join('');

  let coolThresholdSum = 1;

  for (let digit of digitAsString) {
      digit = Number(digit);
      coolThresholdSum *= digit;
  }

  let emojiArray = [];
  let emojiMatch = string.match(emojiPattern);
  for (let emoji of emojiMatch) {
      let sum = 0;
      for (let i = 2; i < emoji.length - 2; i++) {
          let num = emoji[i].charCodeAt();
          sum += num;
      }
      let emojiObject = {
          [emoji]: sum
      };
      emojiArray.push(emojiObject);
  }
  console.log(`Cool threshold: ${coolThresholdSum}`);
  console.log(
      `${emojiArray.length} emojis found in the text. The cool ones are:`
  );
  for (let emoji of emojiArray) {
      let emojiKey = Object.keys(emoji);
      let emojiValue = Object.values(emoji);
      if (emojiValue[0] > coolThresholdSum) {
          console.log(emojiKey.join(''));
      }
  }
}

solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **" +
        "Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 dif" +
        "ferent types of :Snak::Es::. ::Mooning:: **Shy**"]);

// solve(
//     ["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy" +
//             ":: **Banana** ::Wink:: **Vali** ::valid_emoji::"]
// );

// solve(
//     ["It is a long established fact that 1 a reader will be distracted by 9 the read" +
//             "able content of a page when looking at its layout. The point of using ::LoremI" +
//             "psum:: is that it has a more-or-less normal 3 distribution of 8 letters, as op" +
//             "posed to using 'Content here, content 99 here', making it look like readable *" +
//             "*English**."]
// );