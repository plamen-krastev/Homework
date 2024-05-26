function cookingByNumbers(
  numAsString,
  operator1,
  operator2,
  operator3,
  operator4,
  operator5
) {
  let num = Number(numAsString);

  let actions = {
    operator1,
    operator2,
    operator3,
    operator4,
    operator5,

    chop: function (num) {
      num /= 2;
      return num;
    },
    dice(num) {
      num = Math.sqrt(num);
      return num;
    },
    spice(num) {
      num += 1;
      return num;
    },
    bake: function (num) {
      num *= 3;
      return num;
    },
    fillet(num) {
      num *= 0.8;
      return num;
    },
  };

  for (let i = 1; i <= 5; i++) {
    let curOperator = actions["operator" + i];
    num = actions[curOperator](num);
    console.log(num);
  }
}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
