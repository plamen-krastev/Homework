function passwordValidator(password) {

    let hasValidLength = checkLength(password);
    let hasLettersAndDigits = checkLettersAndDigits(password);
    let hasAtLeast2Digs = checkDigitsCount(password);

    if (hasValidLength && hasLettersAndDigits && hasAtLeast2Digs) {
        console.log('Password is valid');
    }

    function checkLength(password) {
        if (password.length > 5 && password.length < 11) {
            return true;
        } else {
            console.log('Password must be between 6 and 10 characters');
            return false;
        }
    }

    function checkLettersAndDigits(password) {
        let checkLetAndDig = /^[a-zA-Z0-9]+$/;
        let isMatch = checkLetAndDig.test(password);

        if (isMatch) {
            return true;
        } else {
            console.log('Password must consist only of letters and digits');
            return false;
        }
    }

    function checkDigitsCount(password) {
        let regNum = /[0-9]{2,}/;
        let isMatch = regNum.test(password);
        if (isMatch) {
            return true;
        } else {
            console.log('Password must have at least 2 digits');
            return false;
        }
    }
}

// passwordValidator('logIn');
// passwordValidator('MyPass123');
passwordValidator('Pa$s$s');