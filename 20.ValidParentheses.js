/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length && isMatch(stack[stack.length - 1], s[i])) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return !stack.length;
};

var isMatch = function (l, r) {
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    return map[l] === r;
}

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
