function wordsUppercase(input) {
  // getting words
  words = input.split(/\W+/);

  // filter empty indexes, map to upper case and join by ", "
  words = words
    .filter((el) => el.length !== 0)
    .map((el) => el.toUpperCase())
    .join(", ");

  // print result
  console.log(words);
}

wordsUppercase("Hi, how are you?");
wordsUppercase("hello");
