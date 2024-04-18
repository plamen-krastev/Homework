function extract(content) {
  let para = document.getElementById(content).textContent;
  let pattern = /\([A-Za-z 0-9-]+\)/g;
  let result = [];
  let match = pattern.exec(para);
  while(match) {
    result.push(match[0]);
    match = pattern.exec(para);
  }
  return result.join('; ');
}

// function extract(elementId) {
//   let para = document.getElementById(elementId).textContent;
//   let pattern = /\(([^)]+)\)/g;
//   let result = [];
//   let match = pattern.exec(para);
//   while(match) {
//   result.push(match[1]);
//   match = pattern.exec(para);
//   }
//   return result.join('; ');
//   }

// function solve(str) {
//   let pattern = /\([A-Za-z 0-9-]+\)/g;
//   let match = pattern.exec(str);
//   let resultSolve = [];

//   while(match) {
//     resultSolve.push(match[0])
//     match = pattern.exec(str);
//   }
//   console.log(resultSolve.join('; '));

// }

// solve('The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).');