/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    let min = nums[0];

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] < min) {
            min = nums[i - 1];
        }

        if (min >= nums[i]) {
            continue;
        }

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > min && nums[j] < nums[i]) {
                return true;
            }
        }
    }

    return false;
};

var find132patternSmart = function (nums) {
    let mins = [nums[0], nums[0]];
    for (let i = 2; i < nums.length; i++) {
        mins[i] = Math.min(nums[i - 1], mins[i - 1]);
    }

    let stack = [nums[nums.length - 1]];

    for (let i = nums.length - 2; i > 0; i--) {
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            let max = stack.pop();
            if (max > mins[i]) {
                return true;
            }
        }

        stack.push(nums[i]);
    }

    return false;
}

console.log(find132patternSmart([1,0,1,-4,-3]));
console.log(find132patternSmart([1, 2, 3, 4]));
console.log(find132patternSmart([3, 1, 4, 2]));
console.log(find132patternSmart([-1, 3, 2, 0]));
