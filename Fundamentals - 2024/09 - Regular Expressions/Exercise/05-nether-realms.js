function netherRealms(data) {
  let patternFloatNum = /(?<floatNum>[-+]?\d+\.\d+)/;
  let demons = data.split(',');
  for (let demon of demons) {
    console.log(demon.trim());
  }
}

netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
netherRealms('Gos/ho');