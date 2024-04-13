function solve(data) {
  let initiateDashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let isWin = false;
  let counter = 0;
  let playerX = "X";
  let playerO = "O";

  for (let i = 0; i < data.length; i++) {
    let [rowIdx, colIdx] = data[i].split(" ").map((x) => Number(x));
    if (rowIdx >= 0 && rowIdx < 3 && colIdx >= 0 && colIdx < 3) {
      if (counter % 2 === 0) {
        // player X turn
        if (!initiateDashboard[rowIdx][colIdx]) {
          initiateDashboard[rowIdx][colIdx] = "X";
          for (let j = 0; j < initiateDashboard.length; j++) {
            isWin = initiateDashboard[j].every(
              (el, _, arr) => el === arr[0] && el !== false
            );
            if (isWin) {
              break;
            }
          }
          if (isWin) {
            console.log(`Player ${playerX} wins!`);
            break;
          }
          let leftDiagonal = [];
          let rightDiagonal = [];
          for (let j = 0; j < initiateDashboard.length; j++) {
            let lastIdx = initiateDashboard.length - 1;
            let left = initiateDashboard[j][j];
            let right = initiateDashboard[j][lastIdx - j];
            leftDiagonal.push(left);
            rightDiagonal.push(right);
          }
          isWin = leftDiagonal.every(
            (el, _, arr) => el === arr[0] && el !== false
          );
          if (isWin) {
            console.log(`Player ${playerX} wins!`);
            break;
          }
          isWin = rightDiagonal.every(
            (el, _, arr) => el === arr[0] && el !== false
          );
          if (isWin) {
            console.log(`Player ${playerX} wins!`);
            break;
          }
          counter++;
          // console.log(`Player ${playerX} count - ${counter}`);
        } else {
          console.log("This place is already taken. Please choose another!");
        }
      } else {
        // player O turn
        if (!initiateDashboard[rowIdx][colIdx]) {
          initiateDashboard[rowIdx][colIdx] = "O";
          for (let j = 0; j < initiateDashboard.length; j++) {
            isWin = initiateDashboard[j].every(
              (el, _, arr) => el === arr[0] && el !== false
            );
            if (isWin) {
              break;
            }
          }
          if (isWin) {
            console.log(`Player ${playerO} wins!`);
            break;
          }
          let leftDiagonal = [];
          let rightDiagonal = [];
          for (let j = 0; j < initiateDashboard.length; j++) {
            let lastIdx = initiateDashboard.length - 1;
            let left = initiateDashboard[j][j];
            let right = initiateDashboard[j][lastIdx - j];
            leftDiagonal.push(left);
            rightDiagonal.push(right);
          }
          isWin = leftDiagonal.every(
            (el, _, arr) => el === arr[0] && el !== false
          );
          if (isWin) {
            console.log(`Player ${playerO} wins!`);
            break;
          }
          isWin = rightDiagonal.every(
            (el, _, arr) => el === arr[0] && el !== false
          );
          if (isWin) {
            console.log(`Player ${playerO} wins!`);
            break;
          }
          counter++;
          // console.log(`Player ${playerO} count - ${counter}`);
        } else {
          console.log("This place is already taken. Please choose another!");
        }
      }

      let fieldsArr = [];
      for (let row of initiateDashboard) {
        for (let i = 0; i < row.length; i++) {
          fieldsArr.push(row[i]);
        }
      }

      // check - is all field are full:
      let isFieldsFull = fieldsArr.every((el) => el !== false);
      if (isFieldsFull) {
        console.log("The game ended! Nobody wins :(");
        break;
      }
    } else {
      continue;
    }
  }
  for (let row of initiateDashboard) {
    console.log(row.join("\t"));
  }
}

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);

solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
