/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        if (n & (1 << i)) {
            result++;
        }
    }

    return result;
};

var hammingWeightOld = function (n) {
    let result = 0;

    while (n) {
        result += n % 2;

        n = parseInt(n / 2);
    }

    return result;
}

console.log(hammingWeightOld(0b11111111111111111111111111111101));
