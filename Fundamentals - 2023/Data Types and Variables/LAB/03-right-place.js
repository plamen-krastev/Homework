function replace (string, char, string2) {

  // replace _ with correct char
  let finalString = "";
  for (let i = 0; i < string.length; i++) {
    let symbol = "";
    if (string[i] == '_') {
      symbol = char;
    } else {
      symbol = string[i];
    }
    finalString += symbol;
  }
  
  // compare both strings 
  console.log(finalString == string2 ? "Matched" : "Not Matched");
  
}

replace ('Str_ng', 'I', 'Strong');
replace ('Str_ng', 'i', 'String');