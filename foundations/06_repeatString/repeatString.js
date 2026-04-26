const repeatString = function(string, num) {

    if (num<0) {
        return("ERROR");
    } else {
        let outputString = "";
        let i = 0;
        while (i < num) {
            outputString += string;
            i++;
    }
    return(outputString)
    }
};
   
// Do not edit below this line
module.exports = repeatString;
