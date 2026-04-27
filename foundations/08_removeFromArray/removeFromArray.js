const removeFromArray = function(...theArgs) {
    let outputArray = [];
    const myArray = arguments[0];

    for (i = 0; i < myArray.length; i++) {
        for (j = 1; j < arguments.length; j++) {
            if (myArray[i] !== arguments[j]) {
                continue;               
            } else {
                break;
            }
        }
        if (j == arguments.length) {
            outputArray.push(myArray[i]);
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
