/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let w = [];
    while (x) {
        w.push(x % 10);

        x = Math.floor(x / 10);
    }

    for (let i = 0, j = w.length - 1; i <= j; i++, j--) {
        if (w[i] != w[j]) {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome(121))
