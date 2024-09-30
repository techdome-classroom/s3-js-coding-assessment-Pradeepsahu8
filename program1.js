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
for(let char of s )
{
if(bracketMap[char])
{
    const topElement = stack.pop()|| '#';
    if(bracketMap[char]!==topElement)
    {
        return false;
    }
}else{
    stack.push(char);
}

}
return stack.length === 0;
console.log(isValid("()"));        // Output: true
console.log(isValid("()[]{}"));    // Output: true
console.log(isValid("(]"));   
};

module.exports = { isValid };


