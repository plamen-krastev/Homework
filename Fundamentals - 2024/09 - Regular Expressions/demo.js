function demo() {
  let text = '_ (Underscores) are   also word characters!';
  let regex = /\s+/;
  let array = text.split(regex);
  console.log(array);
  let exec = regex.exec(text);
  console.log(exec);

}

demo();