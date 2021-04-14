/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
    let a = [];

    traverseBST(root, a);

    let min = Infinity;

    for (let i = 1; i < a.length; i++) {
        if (min > a[i] - a[i - 1]) {
            min = a[i] - a[i - 1];
        }
    }

    return min;
};

var traverseBST = function (root, a) {
    if (root) {
        traverseBST(root.left, a);
        a.push(root.val);
        traverseBST(root.right, a);
    }
};
