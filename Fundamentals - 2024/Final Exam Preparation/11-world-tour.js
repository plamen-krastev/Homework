function worldTour(data) {
    let stops = data.shift();
    let command = data.shift();
    while (command !== 'Travel') {
        let token = command.split(':')
        let action = token.shift();
        if (action === 'Add Stop') {
            let idx = Number(token[0]);
            let town = token[1];
            if (idx >= 0 && idx < stops.length) {
                stops = stops.slice(0, idx) + town + stops.slice(idx);
            }
        } else if (action === 'Remove Stop') {
            let [startIdx, finalIdx] = token.map(Number);
            if (startIdx >= 0 && startIdx < stops.length && finalIdx >= 0 && finalIdx < stops.length) {
                stops = stops.slice(0, startIdx) + stops.slice(finalIdx + 1);
            }
        } else if (action === 'Switch') {
            let [oldString, newString] = token;
            if (stops.includes(oldString)) {
                stops = stops.replace(oldString, newString);
            }
        }
        console.log(stops);
        command = data.shift();
        if (command === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${stops}`);
        }
    }
}

  worldTour(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"]);
  // worldTour(
  //     ['Albania:Bulgaria:Cyprus:Deuchland', 'Add Stop:3:Nigeria', 'Remove Stop:4:8', 'Switch:Albania: Azərbaycan', 'Travel']
  // );