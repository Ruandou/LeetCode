/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
     let result = [];
     for (let i = 0; i < m; i++) {
         result[i] = [];
     }

     for (let i = 0; i < m; i++) {
         result[i][0] = 1;
     }

     for (let i = 0; i < n; i++) {
         result[0][i] = 1;
     }

     for (let i = 1; i < m; i++) {
         for (let j = 1; j < n; j++) {
             result[i][j] = result[i - 1][j] + result[i][j - 1];
         }
     }

     return result[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(3, 3));
