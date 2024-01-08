function solve(pass) {

    let checkLength = checkPassLength(pass);
    let checkLetAndDig = checkOnlyLettersDigit(pass);
    let check2Digits = check2Digs(pass);

    if (!checkLetAndDig) {
        console.log('Password must consist only of letters and digits');
    }

    if (!check2Digits) {
        console.log("Password must have at least 2 digits");
    }

    if (checkLength && checkLetAndDig && check2Digits) {
        console.log('Password is valid');
    }

    function checkPassLength(pass) {

        if (!(pass.length >= 6 && pass.length <= 10)) {
            console.log('Password must be between 6 and 10 characters');
            return false;
        } else {
            return true;
        }
    }

    function checkOnlyLettersDigit(pass) {

        for (let code of pass) {
            let cur = code.charCodeAt();

            if (!((cur >= 48 && cur <= 57) || (cur >= 65 && cur <= 90) || (cur >= 97 && cur <= 122))) {
                return false;
            }
        }

        return true;
    }

    function check2Digs(pass) {
        let digitCount = 0;
        for (let code of pass) {
            let cur = code.charCodeAt();
            if (cur >= 48 && cur <= 57) {
                digitCount++;
            }
        }
        if (digitCount >= 2) {
            return true;
        } else {
            return false;
        }
    }
}

// solve ('logIn');
solve ('MyPass123');
// solve ('Pa$s$s');