function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const refInputText = document.querySelector("#inputs textarea");
    const refOutBestRestaurant = document.querySelector("#bestRestaurant p");
    const refOutBestWorkers = document.querySelector("#workers p");

    // we can use JSON parse ot Regex:
    // let regexPattern = /"([^"]*)"/g;
    // let data = [...inputText.matchAll(regexPattern)].map((match) => match[1]);
    let inputData = refInputText.value;
    let restaurantData = JSON.parse(inputData);

    /*
    Structure:
      restaurants {
        avrSalary: number,
        bestSalary: number,
        workerList: [array],
      }
    */
    let restaurants = {};

    for (let row of restaurantData) {
      let [restaurant, workersInfo] = row.split(" - ");

      if (!restaurants.hasOwnProperty(restaurant)) {
        restaurants[restaurant] = {
          avrSalary: 0,
          bestSalary: 0,
          workersList: [],
        };
      }

      let curRestaurant = restaurants[restaurant];

      let workerInfo = workersInfo.split(", ");
      for (let workerAndSalary of workerInfo) {
        let [worker, salary] = workerAndSalary.split(" ");
        salary = Number(salary);

        if (!curRestaurant.workersList.includes(worker)) {
          let curWorker = [worker, salary];
          curRestaurant.workersList.push(curWorker);
        }
      }

      let salarySum = 0;
      let bestSalary = 0;
      for (let worker of curRestaurant.workersList) {
        let curSalary = worker[1];
        salarySum += curSalary;
        if (bestSalary < curSalary) {
          bestSalary = curSalary;
        }
      }
      let avrSalary = salarySum / curRestaurant.workersList.length;
      curRestaurant.avrSalary = avrSalary;
      curRestaurant.bestSalary = bestSalary;

      // sorting:
      curRestaurant.workersList.sort((a, b) => b[1] - a[1]);
    }
    // console.log(restaurants);

    // best restaurant:
    let bestRestaurant = "";
    let highestAvrSalary = 0;
    for (let restaurant in restaurants) {
      let curAvrSalary = restaurants[restaurant].avrSalary;
      if (curAvrSalary > highestAvrSalary) {
        highestAvrSalary = curAvrSalary;
        bestRestaurant = restaurant;
      }
    }

    //printing:
    refOutBestRestaurant.textContent = `Name: ${bestRestaurant} Average Salary: ${highestAvrSalary.toFixed(
      2
    )} Best Salary: ${restaurants[bestRestaurant].bestSalary.toFixed(2)}`;

    let workerPrint = "";
    for (let worker of restaurants[bestRestaurant].workersList) {
      let [name, salary] = worker;
      let curWorker = `Name: ${name} With Salary: ${salary} `;
      workerPrint += curWorker;
    }
    refOutBestWorkers.textContent = workerPrint.trim();
  }
}
