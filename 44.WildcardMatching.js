/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function (s, p) {
    let dp = [];
    for (let i = 0; i <= s.length; i++) {
        dp[i] = [];
    }

    dp[0][0] = true;

    for (let i = 1; i <= p.length; i++) {
        dp[0][i] = dp[0][i - 1] && p[i - 1] === '*';
    }

    for (let i = 1; i <= s.length; i++) {
        dp[i][0] = false;
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            dp[i][j] = (
                (
                    dp[i - 1][j] &&
                    p[j - 1] === '*'
                ) ||
                (
                    dp[i][j - 1] &&
                    p[j - 1] === '*'
                ) ||
                (
                    dp[i - 1][j - 1] &&
                    (
                        s[i - 1] === p[j - 1] ||
                        p[j - 1] === '?' ||
                        p[j - 1] === '*'
                    )
                )
            );
        }
    }

    return dp[s.length][p.length];
};

console.log(isMatch('abcabczzzde', '*abc???de*'));
console.log(isMatch('baabba', '?*?a??'));
console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', '*'));
console.log(isMatch('cb', '?a'));
console.log(isMatch('adceb', '*a*b'));
console.log(isMatch('acdcb', 'a*c?b'));
