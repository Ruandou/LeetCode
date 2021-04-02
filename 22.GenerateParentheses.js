/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let dp = [['']];

    for (let k = 1; k <= n; k++) {
        dp[k] = [];

        for (let i = 0; i < k; i++) {
            let p = i;
            let q = k - i - 1;

            for (let pi = 0; pi < dp[p].length; pi++) {
                for (let qi = 0; qi < dp[q].length; qi++) {
                    dp[k].push(`(${dp[p][pi]})${dp[q][qi]}`);
                }
            }
        }
    }

    return dp[n];
};

console.log(generateParenthesis(2));
console.log(generateParenthesis(4));
console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
