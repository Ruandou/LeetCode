/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    let result = [];
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let a = nums[i];
            let b = nums[j];
            let c = 0 - nums[i] - nums[j];

            if (binarySearch(nums, c, j + 1, nums.length - 1) !== -1) {
                let key = buildKey(a, b, c);

                if (!set.has(key)) {
                    result.push([a, b, c]);

                    set.add(key);
                }
            }
        }
    }

    result.sort((item1, item2) => {
        for (let i = 0; i < 3; i++) {
            if (item1[i] !== item2[i]) {
                return item1[i] - item2[i];
            }

            return 0;
        }
    })

    return result;
};

var binarySearch = function (nums, value, l, r) {
    if (l > r) {
        return -1;
    }

    let mid = parseInt((l + r) / 2);

    if (value === nums[mid]) {
        return mid;
    }

    if (value > nums[mid]) {
        return binarySearch(nums, value, mid + 1, r);
    } else {
        return binarySearch(nums, value, l, mid - 1);
    }
}

var buildKey = function (a, b, c) {
    [a, b, c] = [a, b, c].sort();

    return `${a}#${b}#${c}`;
}

console.log(threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]));
console.log(threeSum([-1,0,1,2,-1,-4]));
