/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < nums.length; i = next(nums, i)) {
        for (let j = i + 1; j < nums.length; j = next(nums, j)) {
            let sum1 = nums[i] + nums[j];

            for (let l = j + 1, r = nums.length - 1; l < r;) {
                let sum2 = nums[l] + nums[r];

                if (sum2 === target - sum1) {
                    result.push([nums[i], nums[j], nums[l], nums[r]]);
                    l = next(nums, l);
                    r = next(nums, r, -1);
                } else if (sum2 > target - sum1) {
                    r = next(nums, r, -1);
                } else {
                    l = next(nums, l);
                }
            }
        }
    }

    return result;
};

var next = function (nums, i, direction = 1) {
    let j;

    if (direction > 0) {
        j = i + 1;
        while (j < nums.length && nums[j] === nums[i]) {
            j++;
        }
    } else {
        j = i - 1;
        while (j >= 0 && nums[j] === nums[i]) {
            j--;
        }
    }

    return j;
};

console.log(fourSum([1,0,-1,0,-2,2], 0));
console.log(fourSum([], 0));
