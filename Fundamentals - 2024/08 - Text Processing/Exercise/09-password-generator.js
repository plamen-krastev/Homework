function solve(input) {
    let password = input[0].toLowerCase() + input[1].toLowerCase();
    let word = input[2].toUpperCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let index = 0;

    for (let curSymbol of password) {
        if (vowels.includes(curSymbol)) {
            let newSymbol = word[index];
            password = password.replace(curSymbol, newSymbol);
            index++;
            if (index === word.length) {
                index = 0;
            }
        }
    }

    password = password
        .split('')
        .reverse()
        .join('');
        
    console.log(`Your generated password is ${password}`);
}

solve(['ilovepizza', 'ihatevegetables', 'orange']);
solve(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
solve(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);