function createAssemblyLine() {
  const decoration = {
    hasClima(car) {
      car.temp = 21;
      car.tempSettings = 21;
      car.adjustTemp = function () {
        // while (car.temp !== car.tempSettings) {
        //   if (car.temp < car.tempSettings) {
        //     car.temp++;
        //   } else {
        //     car.temp--;
        //   }
        // }
        if (car.temp < car.tempSettings) {
          car.temp++;
        } else if (car.temp > car.tempSettings) {
          car.temp--;
        }
      };
    },
    hasAudio(car) {
      car.currentTrack = {};
      car.nowPlaying = function () {
        console.log(
          `Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`
        );
      };
    },
    hasParktronic(car) {
      car.checkDistance = function (distance) {
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (0.1 <= distance && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (0.25 <= distance && distance < 0.5) {
          console.log("Beep!");
        }
      };
    },
  };

  return decoration;
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
  name: "Never Gonna Give You Up",
  artist: "Rick Astley",
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);
