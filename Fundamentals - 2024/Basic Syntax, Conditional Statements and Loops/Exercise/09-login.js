function solve(arr) {

    let username = arr.shift();
    let password = "";

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let curPass = arr[i];
        if (password === curPass) {
            console.log(`User ${username} logged in.`);
        } else {
            count++;
            if (count >= 4) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}

solve(['Acer','login','go','let me in','recA']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);
solve(['sunny','rainy','cloudy','sunny','not sunny', 'hello']);