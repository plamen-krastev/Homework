function createAssemblyLine() {
  const result = {
    temp: 21,
    hasClima() {
      
    },
  };
  return result;
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

assemblyLine.hasClima(myCar);
console.log(myCar);
// myCar.tempSettings = 18;
// myCar.adjustTemp();
// console.log(myCar.temp);
