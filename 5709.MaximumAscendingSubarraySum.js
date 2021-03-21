/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
    let result = nums[0];
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }

        if (sum > result) {
            result = sum;
        }
    }

    return result;
};

console.log(maxAscendingSum([10,20,30,5,10,50]));
console.log(maxAscendingSum([10,20,30,40,50]));
console.log(maxAscendingSum([12,17,15,13,10,11,12]));
console.log(maxAscendingSum([100,10,1]));
