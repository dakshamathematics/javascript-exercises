const sumAll = function(int1 , int2) {
    if ((typeof int1 != "number") || (typeof int2 != "number") || (int1 < 0) || (int2 < 0) || (int1 == int2) || (!Number.isInteger(int1)) || (!Number.isInteger(int2))){
        return "ERROR";
    } else {
        return (int1 + int2)*(Math.abs(int1-int2)+1)/2;
    }
};

// Do not edit below this line
module.exports = sumAll;
