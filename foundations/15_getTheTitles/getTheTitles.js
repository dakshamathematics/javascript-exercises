const getTheTitles = function(myStructArray) {
    const outputArray = [];
    for (let i = 0; i < myStructArray.length; i++) {
        outputArray.push(myStructArray[i].title);
    }
    return outputArray;
};

// Do not edit below this line
module.exports = getTheTitles;
