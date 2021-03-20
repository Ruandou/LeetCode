/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = strs[0];

    for (let i = 0; i < strs.length; i++) {
        if (str.length > strs[i].length) {
            str = strs[i];
        }
    }

    if (!str) {
        return '';
    }

    let result = '';

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== letter) {
                return result;
            }
        }

        result += letter;
    }

    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
