/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};


var twoSumSmart = function (nums, target) {
    nums = nums
        .map((a, i) => [a, i])
        .sort((a, b) => a[0] - b[0]);

    for (let i = 0, j = nums.length - 1; i < j;) {
        let sum = nums[i][0] + nums[j][0];
        if (sum < target) {
            i++;
        } else if (sum > target) {
            j--;
        } else {
            return [nums[i][1], nums[j][1]];
        }
    }
}

var twoSumSmarter = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
}

console.log(twoSumSmarter([3, 3], 6));
console.log(twoSumSmarter([3, 2, 4], 6));
console.log(twoSumSmarter([2, 7, 11, 15], 9));
