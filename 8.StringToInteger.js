/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let result = parseInt(str);

    let limit = Math.pow(2, 31);
    if (result > limit - 1) {
        result = limit - 1;
    } else if (result < -limit) {
        result = -limit;
    } else if (isNaN(result)) {
        result = 0;
    }

    return result;
};

console.log(myAtoi("123"));
