function intOrFloat (num1, num2, num3) {

  let result = num1 + num2 + num3;

  // sollution with converting number to string and checking string for dot (.)

  // if (result % 1 == 0) {
  //   console.log(`${result} - Integer`);
  // } else {
  //   console.log(`${result} - Float`);    
  // }

  let numType = "Integer";
  if (result % 1 != 0) {
    numType = "Float";
  }

  console.log(`${result} - ${numType}`);



}

intOrFloat (9, 100, 1.1);
intOrFloat (100, 200, 303);