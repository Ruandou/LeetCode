/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    let bulks = new Map();

    for (let i = 0; i < nums.length; i++) {
        let id = calcBulkId(nums[i], t + 1);

        if (bulks.has(id)) {
            return true;
        }

        if (bulks.has(id + 1)) {
            if (Math.abs(bulks.get(id + 1) - nums[i]) <= t) {
                return true;
            }
        }

        if (bulks.has(id - 1)) {
            if (Math.abs(bulks.get(id - 1) - nums[i]) <= t) {
                return true;
            }
        }

        bulks.set(id, nums[i]);

        if (i >= k) {
            bulks.delete(calcBulkId(nums[i - k], t + 1));
        }
    }

    return false;
};

var calcBulkId = function (x, w) {
    return Math.floor(x < 0 ? x / w - 1 : x / w);
}

console.log(containsNearbyAlmostDuplicate([-3,3,-6], 2, 3));
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2));
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));
