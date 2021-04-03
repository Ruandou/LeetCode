/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let dp = [];
    for (let i = 0; i < text1.length; i++) {
        dp[i] = [];
    }

    if (text1[0] === text2[0]) {
        dp[0][0] = 1;
    } else {
        dp[0][0] = 0;
    }

    for (let i = 1; i < text1.length; i++) {
        if (text1[i] === text2[0]) {
            dp[i][0] = 1;
        } else {
            dp[i][0] = dp[i - 1][0];
        }
    }

    for (let i = 1; i < text2.length; i++) {
        if (text1[0] === text2[i]) {
            dp[0][i] = 1;
        } else {
            dp[0][i] = dp[0][i - 1];
        }
    }

    for (let i = 1; i < text1.length; i++) {
        for (let j = 1; j < text2.length; j++) {
            if (text1[i] === text2[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {            
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[text1.length - 1][text2.length - 1];
};

console.log(longestCommonSubsequence('abcde', 'ace'));
console.log(longestCommonSubsequence('abc', 'abc'));
console.log(longestCommonSubsequence('abc', 'def'));
