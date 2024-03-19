function netherRealms(data) {
  let patternFloatNum = /[-+]?\d+(\.\d+)?/;
  let demons = data.split(',');
  for (let demon of demons) {
    // console.log(demon.trim());
    demon = demon.trim();
    if (!demon.includes(' ')) {
      console.log(demon);
    }
  }
}

netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
netherRealms('Gos/ho');