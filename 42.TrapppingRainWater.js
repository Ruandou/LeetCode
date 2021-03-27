/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length < 3) {
        return 0;
    }

    let lMax = [];
    let rMax = [];
    let stack = [];

    stack = [];
    for (let i = 0; i < height.length; i++) {
        lMax[i] = -1;

        while (stack.length && top(stack, height) <= height[i]) {
            lMax[i] = stack.pop();
        }

        stack.push(i);
    }

    stack = [];
    for (let i = height.length - 1; i >= 0; i--) {
        rMax[i] = -1;

        while (stack.length && top(stack, height) <= height[i]) {
            rMax[i] = stack.pop();
        }

        stack.push(i);
    }

    let max = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[max] < height[i]) {
            max = i;
        }
    }

    let result = 0;

    let r = max;
    let l = lMax[r];
    while (l >= 0) {
        result += (r - l - 1) * height[l] - sum(height, l + 1, r - 1);

        r = l;
        l = lMax[r];
    }

    l = max;
    r = rMax[l];
    while (r >= 0) {
        result += (r - l - 1) * height[r] - sum(height, l + 1, r - 1);

        l = r;
        r = rMax[l];
    }

    return result;
};

var trapSmarter = function (height) {
    let result = 0;

    for (let l = 0, r = height.length - 1; l < r;) {
        if (height[l] < height[r]) {
            let i = l + 1;

            while (i < r && height[i] < height[l]) {
                i++;
            }

            result += calc(height, l, i); 

            l = i;
        } else {
            let i = r - 1;

            while (i > l && height[i] < height[r]) {
                i--;
            }

            result += calc(height, i, r);

            r = i;
        }
    }

    return result;
};

var top = function (stack, height) {
    return height[stack[stack.length - 1]];
};

var calc = function (height, l, r) {
    return (r - l - 1) * Math.min(height[l], height[r]) - sum(height, l + 1, r - 1);
}

var sum = function (height, l, r) {
    let result = 0;

    for (let i = l; i <= r; i++) {
        result += height[i];
    }

    return result;
};

console.log(trapSmarter([2, 0, 2]));
console.log(trapSmarter([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trapSmarter([4,2,0,3,2,5]));
