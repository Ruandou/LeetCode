/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
     let result = new Array(n)
     for (let i = 0; i < n; i++) {
         result[i] = new Array(n);
     }

     let value = 1
     let i = 0, j = -1, delta = 1;

     for (let k = 0; k < n; k++, delta *= -1) {
         let limit = Math.floor(k / 2);

         for (j += delta; j < n - limit && j >= limit; j += delta) {
             result[i][j] = value++;
         }

         j -= delta;

         for (i += delta; i < n -limit && i >= limit + 1; i += delta) {
             result[i][j] = value++;
         }

         i -= delta;
     }

     return result;
};

console.log(generateMatrix(10))
