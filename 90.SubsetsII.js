/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let result = [[[]]];

    nums.sort((a, b) => a - b);

    subsetsRecursive(nums, 0, result, {});

    return result.reduce((r, i) => {
        r.push(...i);
        return r;
    }, []);
};

var subsetsRecursive = function (nums, k, result, map) {
    result[k + 1] = [];

    if (map[nums[k]]) {
        for (let i = 0; i < result[k].length; i++) {
            result[k + 1].push([...result[k][i], nums[k]]);
        }
    } else {
        map[nums[k]] = true;

        for (let i = 0; i <= k; i++) {
            for (let j = 0; j < result[i].length; j++) {
                result[k + 1].push([...result[i][j], nums[k]]);
            }
        }
    }

    if (k + 1 < nums.length) {
        subsetsRecursive(nums, k + 1, result, map);
    }
}

console.log(subsetsWithDup([1,2,2]));
console.log(subsetsWithDup([0]));
