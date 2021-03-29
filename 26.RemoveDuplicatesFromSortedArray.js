/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let cur = nums[0];
    let curIndex = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== cur) {
            nums[curIndex++] = cur = nums[i];
        }
    }

    return curIndex;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
