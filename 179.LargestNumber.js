/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums.sort((a, b) => {
        let s1 = a + '';
        let s2 = b + '';

        let i = 0;

        for (; i < s1.length && i < s2.length; i++) {
            if (s1[i] > s2[i]) {
                return -1;
            }

            if (s1[i] < s2[i]) {
                return 1;
            }
        }

        while (i < s1.length) {
            for (let j = 0; j < i; j++) {
                if (s1[j] < s1[i]) {
                    return -1;
                }

                if (s1[j] > s1[i]) {
                    return 1;
                }
            }

            i++;
        }

        while (i < s2.length) {
            for (let j = 0; j < i; j++) {
                if (s2[j] < s2[i]) {
                    return 1;
                }

                if (s2[j] > s2[i]) {
                    return -1;
                }
            }

            i++;
        }

        return 0;
    });

    if (nums[0] === 0) {
        return '0';
    }

    return nums.join('');
};

var largestNumberSmart = function (nums) {
    nums.sort((a, b) => {
        let s1 = a + '';
        let s2 = b + '';

        if (s1 + s2 < s2 + s1) {
            return 1;
        }

        return -1;
    });

    if (nums[0] === 0) {
        return '0';
    }

    return nums.join('');
}

console.log(largestNumberSmart([3,43,48,94,85,33,64,32,63,66]));
console.log(largestNumberSmart([34323,3432]));
console.log(largestNumberSmart([10, 2]));
console.log(largestNumberSmart([3, 30, 34, 5, 9]));
console.log(largestNumberSmart([1]));
console.log(largestNumberSmart([10]));
