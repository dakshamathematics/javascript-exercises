const palindromes = function (myStr) {
    const cleanStr = (myStr.replace(/[^a-z0-9]/gi, '')).toLowerCase();
    let returnValue = true;
    for (let i = 0; i < cleanStr.length/2; i++) {
        if (cleanStr[i] === cleanStr[cleanStr.length-i-1]) {
            continue;
        } else {
            returnValue = false;
            break;
        }
    }
    return returnValue;
};

// Do not edit below this line
module.exports = palindromes;
