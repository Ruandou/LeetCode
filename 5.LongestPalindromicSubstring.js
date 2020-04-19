// Brute Force

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

// DP

/**
* @param {string} s
* @return {string}
*/
var longestPalindromeDP = function (s) {
    let d = 1; // length of the longest palindrome
    let l = 0;
    let r = 0;

    let p = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        p[i] = new Array(s.length);
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j <= Math.min(i + 1, s.length - 1); j++) {
            if (s[i] === s[j]) {
                p[i][j] = true;

                let len = j - i + 1
                if (len > d) {
                    d = len;

                    l = i;
                    r = j;
                }
            }
        }
    }

    for (let k = 3; k <= s.length; k++) {
        for (let i = 1; i <= s.length - k + 1; i++) {
            let j = i + k - 3;
            if (p[i][j] && s[i - 1] === s[j + 1]) {
                p[i - 1][j + 1] = true;

                if (k > d) {
                    d = k;

                    l = i - 1;
                    r = j + 1;
                }
            }
        }
    }

    return s.slice(l, r + 1);
};

console.log(longestPalindromeDP('babad'));
