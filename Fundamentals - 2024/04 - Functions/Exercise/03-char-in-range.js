function charInRange(char1, char2) {

    let [char1Num, char2Num] = rangeSeq(char1, char2);
    let printOut = iteration(char1Num, char2Num);

    console.log(printOut);

    function rangeSeq(firstChar, secondChar) {
        let firstCharNumber = firstChar.charCodeAt();
        let secondCharNumber = secondChar.charCodeAt();

        if (firstCharNumber < secondCharNumber) {
            return arr = [firstCharNumber, secondCharNumber];
        } else {
            return arr = [secondCharNumber, firstCharNumber];
        }
    }

    function iteration(firstChar, secondChar) {
        let result = [];
        for (i = firstChar + 1; i < secondChar; i++) {
            result.push(String.fromCharCode(i));
        }
        return result.join(' ');
    }
}

charInRange('a', 'd');
charInRange('#', ':');
charInRange('C', '#');