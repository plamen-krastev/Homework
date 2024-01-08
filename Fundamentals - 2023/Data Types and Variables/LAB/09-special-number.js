function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let stringI = String(i);
        let sum = 0;

        for (let x = 0; x < stringI.length; x++) {
            let curSum = Number(stringI[x]);
            sum += curSum;
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }

    }
}
  
  // specialNumbers (15);
  specialNumbers (20);

//   if (i == 5 || i == 7 || i == 11) {
//     console.log(`${i} -> True`);
//   } else {
//     console.log(`${i} -> False`);
//   }
