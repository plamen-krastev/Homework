function demo(number) {
    let variable = 'Hello';

    console.log(typeof variable);

    let num = 5;

    for (let i = 0; i < 10; i++) {
      let value = i + 5;
      if (value > 10) {
        break;
      }
      console.log(value);
    }
    if (num === 5) {
        let value = num;
        console.log(value);
      }

      console.log(number);
}

demo(155);