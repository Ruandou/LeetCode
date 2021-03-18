/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    if (!s.length || !t.length) {
        return 0;
    }

    let result = [];
    for (let i = 0; i < s.length; i++) {
        result[i] = [];
    }

    if (s[0] === t[0]) {
        result[0][0] = 1;
    } else {
        result[0][0] = 0;
    }

    for (let i = 1; i < s.length; i++) {
        if (s[i] === t[0]) {
            result[i][0] = result[i - 1][0] + 1;
        } else {
            result[i][0] = result[i - 1][0];
        }
    }

    for (let i = 1; i < t.length; i++) {
        result[i - 1][i] = 0;
    }

    for (let i = 1; i < t.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (s[j] === t[i]) {
                result[j][i] = result[j - 1][i] + result[j - 1][i - 1];
            } else {
                result[j][i] = result[j - 1][i];
            }
        }
    }

    return result[s.length - 1][t.length - 1];
};

console.log(numDistinct('rabbbit', 'rabbit'));
console.log(numDistinct('babgbag', 'bag'));
