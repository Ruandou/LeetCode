/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let revertedNumber = 0;

    let num = x;
    while (num) {
        revertedNumber = revertedNumber * 10 + num % 10;

        num = Math.floor(num / 10);
    }

    return x === revertedNumber;
};

console.log(isPalindrome(121));
