/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    let dp = [];
    for (let i = 0; i < s1.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= s1.length; j++) {
            dp[i][j] = [];
        }
    }

    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            dp[i][j][1] = s1[i] === s2[j];
        }
    }

    for (let k = 2; k <= s1.length; k++) {
        for (let i = 0; i + k <= s1.length; i++) {
            for (let j = 0; j + k <= s2.length; j++) {
                for (let l = 1; l < k; l++) {
                    dp[i][j][k] =
                        (dp[i][j][l] && dp[i + l][j + l][k - l]) ||
                        (dp[i][j + k - l][l] && dp[i + l][j][k - l]);

                    if (dp[i][j][k]) {
                        break;
                    }
                }
            }
        }
    }

    return dp[0][0][s1.length];
};

console.log(isScramble('great', 'rgeat'));
console.log(isScramble('abcde', 'caebd'));
console.log(isScramble('a', 'a'));
