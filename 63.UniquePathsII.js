/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    let result = [];
    for (let i = 0; i < m; i++) {
        result[i] = [];
    }

    result[0][0] = obstacleGrid[0][0] ? 0 : 1;

    for (let i = 1; i < m; i++) {
        result[i][0] = obstacleGrid[i][0] ? 0 : result[i - 1][0];
    }

    for (let i = 1; i < n; i++) {
        result[0][i] = obstacleGrid[0][i] ? 0 : result[0][i - 1];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            result[i][j] = obstacleGrid[i][j]
                ? 0
                : (
                    (obstacleGrid[i - 1][j] ? 0 : result[i - 1][j]) +
                    (obstacleGrid[i][j - 1] ? 0 : result[i][j - 1])
                );
        }
    }

    return result[m - 1][n - 1];
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));
console.log(uniquePathsWithObstacles([[0,1],[0,0]]));
