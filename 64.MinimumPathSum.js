/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
     let m = grid.length;
     let n = grid[0].length;

     let result = [];
     for (let i = 0 ; i < m; i++) {
         result[i] = [];
     }
     
     result[0][0] = grid[0][0];

     for (let i = 1; i < m; i++) {
         result[i][0] = result[i - 1][0] + grid[i][0];
     }

     for (let i = 1; i < n; i++) {
         result[0][i] = result[0][i - 1] + grid[0][i];
     }

     for (let i = 1; i < m; i++) {
         for (let j = 1; j < n; j++) {
             result[i][j] = Math.min(result[i - 1][j], result[i][j - 1]) + grid[i][j];
         }
     }

     return result[m - 1][n - 1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
console.log(minPathSum([[1,2,3],[4,5,6]]));
