/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let result = [];
    let i = 0, j = -1;
    let m = matrix.length;
    let n = matrix[0].length;
    let r = Math.min(m, n);
    let delta = 1;

    for (let k = 0; k < r; k++, delta *= -1) {
        let limit = Math.floor(k / 2)

        for (j += delta; j < n - limit && j >= limit; j += delta) {
            result.push(matrix[i][j]);
        }

        j -= delta;

        for (i += delta; i < m - limit && i >= limit + 1; i += delta) {
            result.push(matrix[i][j]);
        }

        i -= delta;
    }

    return result;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
