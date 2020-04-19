/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let len = nums1.length + nums2.length;
    let mid = Math.ceil(len / 2);

    let result = findKSortedArrays(nums1, nums2, mid);

    if (len % 2 === 0) {
        result += findKSortedArrays(nums1, nums2, mid + 1);
        result /= 2;
    }

    return result;
};

var findKSortedArrays = function (nums1, nums2, k) {
    let index = findKIndexSortedArrays(nums1, nums2, k);
    if (index === -1) {
        index = findKIndexSortedArrays(nums2, nums1, k);

        return nums2[index];
    }

    return nums1[index];
}

var findKIndexSortedArrays = function (nums1, nums2, k) {
    let l = 0;
    let r = Math.min(nums1.length, k) - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (m === k - 1) {
            if (nums2.length === 0) {
                return m;
            }

            if (nums1[m] <= nums2[0]) {
                return m;
            } else {
                return -1;
            }
        }

        if (nums1[m] === nums2[k - m - 1 - 1]) {
            return m;
        }

        if (nums1[m] > nums2[k - m - 1 - 1]) {
            if (k - m - 1 === nums2.length) {
                return m;
            }

            if (nums1[m] <= nums2[k - m - 1]) {
                return m;
            }

            r = m - 1;
        } else {
            l = m + 1;
        }
    }

    return -1;
}

console.log(findMedianSortedArrays([], [1, 2, 3]));
