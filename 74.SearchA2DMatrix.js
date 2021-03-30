/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let length = m * n;

    return doSearch(matrix, 0, length - 1, target, m, n);
};

var doSearch = function (matrix, l, r, target, m, n) {
    if (l > r) {
        return false;
    }

    let mid = parseInt((l + r) / 2);
    let [i, j] = index2D(mid, m, n);

    if (matrix[i][j] === target) {
        return true;
    }

    if (matrix[i][j] < target) {
        return doSearch(matrix, mid + 1, r, target, m, n);
    } else {
        return doSearch(matrix, l, mid - 1, target, m, n);
    }
}

var index2D = function (index, m, n) {
    let row = parseInt(index / n);
    let column = index - row * n;

    return [row, column];
}

var searchMatrixSmart = function (matrix, target) {
    let row = findRow(matrix, target, 0, matrix.length - 1);
    if (row === -1) {
        return false;
    }

    return findColumn(matrix[row], target, 0, matrix[row].length - 1);
}

var findRow = function (matrix, target, l, r) {
    if (l > r) {
        return r;
    }

    let mid = parseInt((l + r) / 2);

    if (matrix[mid][0] > target) {
        return findRow(matrix, target, l, mid - 1);
    } else {
        return findRow(matrix, target, mid + 1, r);
    }
}

var findColumn = function (matrix, target, l, r) {
    if (l > r) {
        return false;
    }

    let mid = parseInt((l + r) / 2);

    if (matrix[mid] === target) {
        return true;
    }

    if (matrix[mid] > target) {
        return findColumn(matrix, target, l, mid - 1);
    } else {
        return findColumn(matrix, target, mid + 1, r);
    }
}

console.log(searchMatrixSmart([[1],[3]], 3));
console.log(searchMatrixSmart([[1,1]], 2));
console.log(searchMatrixSmart([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
console.log(searchMatrixSmart([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));
