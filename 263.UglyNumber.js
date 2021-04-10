/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) {
        return false;
    }

    let result = {
        1: true,
        2: true,
        3: true,
        5: true
    };

    if (n in result) {
        return result[n];
    }

    for (let i of [2, 3, 5]) {
        if (n % i === 0) {
            result[n] = isUgly(n / i);

            return result[n];
        }
    }

    result[n] = false;

    return result[n];
};

console.log(isUgly(6));
console.log(isUgly(8));
console.log(isUgly(14));
console.log(isUgly(1));
