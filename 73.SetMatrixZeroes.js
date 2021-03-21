/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                for (let k = 0; k < matrix.length; k++) {
                    if (matrix[k][j]) {
                        matrix[k][j] = Infinity;
                    }
                }

                for (let k = 0; k < matrix[i].length; k++) {
                    if (matrix[i][k]) {
                        matrix[i][k] = Infinity;
                    }
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === Infinity) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};

var setZeroesSmart = function (matrix) {
    let rows = [];
    let columns = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = 0;
                columns[j] = 0;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (rows[i] === 0 ||
                columns[j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

var setZeroesSmarter = function (matrix) {
    let firstRowAllZeros = false;
    let fristColumnAllZeros = false;

    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === 0) {
            firstRowAllZeros = true;
            break;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            fristColumnAllZeros = true;
            break;
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][0] === 0 ||
                matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (firstRowAllZeros) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }

    if (fristColumnAllZeros) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

console.log(setZeroesSmarter([[1, 0]]));
console.log(setZeroesSmarter([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
console.log(setZeroesSmarter([[1,1,1],[1,0,1],[1,1,1]]));
