/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let result = {
        1: 1,
        2: 2
    };

    return doClimbStairs(n, result)
};

var doClimbStairs = function (n, result) {
    if (result[n]) {
        return result[n];
    }

    result[n - 1] = doClimbStairs(n - 1, result);
    result[n - 2] = doClimbStairs(n - 2, result);

    return result[n - 1] + result[n - 2];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
