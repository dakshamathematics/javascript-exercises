const fibonacci = function(myInt) {
    if (myInt < 0) {
        return "OOPS";
    }
    const retValue = [0,1];
    let temp = 0;
    for (let i = 1; i < myInt; i++) {
        temp = retValue[0];
        retValue[0] = retValue[1];
        retValue[1] += temp;
    }
    if ( myInt == 0 ) {
        return 0;
    } else {
        return retValue[1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
