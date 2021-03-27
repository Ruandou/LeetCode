/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);

    let delta = Infinity;
    let result = Infinity;

    for (let k = 0; k < nums.length; k++) {
        for (let i = k + 1, j = nums.length - 1; i < j;) {
            let sum = nums[k] + nums[i] + nums[j];
    
            if (Math.abs(sum - target) < delta) {
                result = sum;
                delta = Math.abs(sum - target);
            }
    
            if (sum > target) {
                j--;
            } else {
                i++;
            }
        }
    }

    return result;
};

console.log(threeSumClosest([-1,2,1,-4], 1));
