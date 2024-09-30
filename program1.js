/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
const bracketMap={
    ')':'(',
    '}':'{',
    ']':'[',

};

const stack =[];
if(bracketMap[char])
{
    const topElement = stack.pop()|| '#';
    if(bracketMap[char]!==topElement)
    {
        return false;
    }
}else{
    stack.push(char)
}

};

module.exports = { isValid };


