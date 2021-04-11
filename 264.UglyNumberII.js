/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let result = [1];
    let imax = 31;
    let jmax = 23;
    let kmax = 15;

    for (let i = 0; i < imax; i++) {
        if (i - 1 >= 0) {
            result[i * imax * jmax] = result[(i - 1) * imax * jmax] * 2;
        }
        for (let j = 0; j < jmax; j++) {
            if (j - 1 >= 0) {
                result[i * imax * jmax + j * jmax] = result[i * imax * jmax + (j - 1) * jmax] * 3;
            }
            for (let k = 0; k < kmax; k++) {
                if (k - 1 >= 0) {
                    result[i * imax * jmax + j * jmax + k] = result[i * imax * jmax + j * jmax + k - 1] * 5;
                }
            }
        }
    }

    result.sort((a, b) => a - b);

    return result[n - 1];
};

var nthUglyNumberSmart = function (n) {
    let result = [1];
    let i2 = i3 = i5 = 0;

    for (let i = 1; i < n; i++) {
        let ith = Math.min(result[i2] * 2, result[i3] * 3, result[i5] * 5);

        result.push(ith);

        if (result[i2] * 2 === ith) {
            i2++;
        }
        if (result[i3] * 3 === ith) {
            i3++;
        }
        if (result[i5] * 5 === ith) {
            i5++;
        }
    }

    return result[n - 1];
}

console.log(nthUglyNumberSmart(1352));
console.log(nthUglyNumberSmart(1690));
console.log(nthUglyNumberSmart(448));
console.log(nthUglyNumberSmart(10));
console.log(nthUglyNumberSmart(1));
