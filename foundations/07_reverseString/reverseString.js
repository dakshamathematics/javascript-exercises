const reverseString = function(str) {
    let outputString = "";
    const length = str.length;
    let i = length;
    while ( i > 0) {
        outputString += str.charAt(i-1)
        --i;
    }
    return (outputString);
};

// Do not edit below this line
module.exports = reverseString;
