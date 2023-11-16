function repeater (str, num) {
   let result = '';

   for (let i =0; i < num; i++) {
      result += str;
   }

   return result;
}

repeater ("abc", 3);
repeater ("String", 2);