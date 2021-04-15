/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    return Math.max(
        doRob(nums, 0, nums.length - 2),
        doRob(nums, 1, nums.length - 1)
    )
};

var doRob = function (nums, l, r) {
    if (l === r) {
        return nums[l];
    }

    let dp = [];

    dp[0] = nums[l];
    dp[1] = Math.max(nums[l], nums[l + 1]);

    for (let i = l + 2; i <= r; i++) {
        dp[i - l] = Math.max(
            dp[i - l - 1],
            dp[i - l - 2] + nums[i]
        )
    }

    return dp[r - l];
}

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([0]));
