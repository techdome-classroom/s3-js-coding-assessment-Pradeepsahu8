/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const romanToValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;


    for (let char of s) {
        const value = romanToValue[char];
       
        if (value > prevValue) {
            total += value - 2 * prevValue;
        } else {
            total += value;
        }
        prevValue = value;
    }

    return total;
};


module.exports={romanToInt}