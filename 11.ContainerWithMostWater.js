/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let max = calcArea(l, height[l], r, height[r]);

    while (l < r) {
        if (height[l] <= height[r]) {
            let lvalue = height[l];

            while (l < r && height[l] <= lvalue) l++;
        } else {
            let rvalue = height[r];

            while (l < r && height[r] <= rvalue) r--;
        }

        max = Math.max(
            max,
            calcArea(l, height[l], r, height[r])
        );
    }

    return max;
};

var calcArea = function (x1, y1, x2, y2) {
    return Math.abs((x2 - x1) * Math.min(y1, y2));
}

console.log(maxArea([2,3,10,5,7,8,9]));
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
