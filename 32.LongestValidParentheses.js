/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let result = 0;
    let stack = [['', -1]];

    for (let i = 0; i < s.length; i++) {
        if (isValid(top(stack), s[i])) {
            stack.pop();
        } else {
            stack.push([s[i], i]);
        }
    }

    stack.push(['', s.length]);

    for (let i = 1; i < stack.length; i++) {
        let value = stack[i][1] - stack[i - 1][1] - 1;
        if (value > result) {
            result = value;
        }
    }

    return result;
};

var top = function (stack) {
    return stack.length && stack[stack.length - 1][0];
}

var isValid = function (a, b) {
    return a === '(' && b === ')';
};

console.log(longestValidParentheses('(())(())'));
console.log(longestValidParentheses(')(((((()())()()))()(()))('));
console.log(longestValidParentheses('()(()'));
console.log(longestValidParentheses('()(())'));
console.log(longestValidParentheses(''));
console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses(')()())'));
