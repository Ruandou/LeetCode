/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let result = '';

    for (let i = 0; i < numRows; i++) {
        let d = (numRows - 1) * 2 || 1;

        let j = i;
        let k = d - i;
        while (j < s.length) {
            result += s[j];

            if (i != 0 && i != numRows - 1) {
                if (k < s.length) {
                    result += s[k];
                }
            }

            j += d;
            k += d;
        }
    }

    return result;
};

console.log(convert('"PAHNAPLSIIGYIR"', 3));
