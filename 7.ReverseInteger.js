/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = 1;
    let s = `${x}`;

    if (x < 0) {
        sign = -1;

        s = s.slice(1);
    }

    s = Array.from(s).reverse().join('');

    let limit = Math.pow(2, 31);
    let result = sign * parseInt(s);
    if (result > limit - 1 || result < -limit) {
        result = 0;
    }

    return result;
};

console.log(reverse(123));
