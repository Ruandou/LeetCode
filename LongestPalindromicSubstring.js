/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let d = 1; // length of the longest palindrome
    let l = 0;
    let r = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i + d; j < s.length; j++) {
            if (isPalindrome(s, i, j)) {
                d = j - i + 1;
                l = i;
                r = j;
            }
        }
    }

    return s.slice(l, r + 1);
};

var isPalindrome = function (s, l, r) {
    for (let i = l, j = r; i <= j; i++, j--) {
        if (s[i] != s[j]) {
            return false;
        }
    }

    return true;
}

console.log(longestPalindrome('babad'));
