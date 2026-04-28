const findTheOldest = function(myStructArray) {
    const mySA = myStructArray;
    let maxAgeIndex = 0;
    let maxAge = 0;
    const now = new Date().getFullYear();
    for (let i = 0; i < mySA.length; i++) {
        if (!Object.hasOwn(mySA[i], 'yearOfDeath')) {
            mySA[i].yearOfDeath = now;
        }
        if ((mySA[i].yearOfDeath - mySA[i].yearOfBirth) > maxAge) {
                maxAge = (mySA[i].yearOfDeath - mySA[i].yearOfBirth);
                maxAgeIndex = i;
        }
        
    }
    return mySA[maxAgeIndex];    
};

// Do not edit below this line
module.exports = findTheOldest;
