/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result *= 2;
        if (n & (1 << i)) {
            result += 1;
        }
    }

    return result;
};

console.log(reverseBits(0b00000010100101000001111010011100));
console.log(reverseBits(0b11111111111111111111111111111101));
