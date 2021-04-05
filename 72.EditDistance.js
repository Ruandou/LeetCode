/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if (!word1.length || !word2.length) {
        return word1.length || word2.length;
    }

    let dp = [];
    for (let i = 0; i < word1.length; i++) {
        dp[i] = [];
    }

    if (word1[0] === word2[0]) {
        dp[0][0] = 0;
    } else {
        dp[0][0] = 1;
    }

    for (let i = 1; i < word1.length; i++) {
        if (word1[i] === word2[0]) {
            dp[i][0] = i;
        } else {
            dp[i][0] = dp[i - 1][0] + 1;
        }
    }

    for (let i = 1; i < word2.length; i++) {
        if (word1[0] === word2[i]) {
            dp[0][i] = i;
        } else {
            dp[0][i] = dp[0][i - 1] + 1;
        }
    }

    for (let i = 1; i < word1.length; i++) {
        for (let j = 1; j < word2.length; j++) {
            if (word1[i] === word2[j]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j - 1] + 1,
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1
                )
            }
        }
    }

    return dp[word1.length - 1][word2.length - 1];
};

console.log(minDistance('horse', 'ros'));
console.log(minDistance('intention', 'execution'));
