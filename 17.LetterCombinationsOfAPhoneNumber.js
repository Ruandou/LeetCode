/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function (digits) {
    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let result = [];
    let letters = [...digits].map(digit => map[digit]);

    build(letters, 0, '', result);

    return result;
};

var build = function (letters, k, prefix, result) {
    if (letters.length) {
        if (k === letters.length - 1) {
            for (let i = 0; i < letters[k].length; i++) {
                result.push(`${prefix}${letters[k][i]}`);
            }
        } else {
            for (let i = 0; i < letters[k].length; i++) {
                build(letters, k + 1, `${prefix}${letters[k][i]}`, result);
            }
        }
    }
};

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));
