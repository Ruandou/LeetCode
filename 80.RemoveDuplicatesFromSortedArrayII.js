/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let current = Infinity;
    let count = 1;
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === current) {
            count++;
        } else {
            current = nums[i];
            count = 1;
        }

        if (count <= 2) {
            nums[k++] = nums[i];
        }
    }

    return k;
};

console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
