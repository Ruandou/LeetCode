/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let operators = new Set(['+', '-', '*', '/']);
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        if (operators.has(tokens[i])) {
            let right = stack.pop();
            let left = stack.pop();

            stack.push(calc(left, right, tokens[i]));
        } else {
            stack.push(Number(tokens[i]));
        }
    }

    return stack.pop();
};

var calc = function(left, right, operator) {
    switch (operator) {
        case '+':
            return left + right;
        case '-':
            return left - right;
        case '*':
            return left * right;
        case '/':
            return parseInt(left / right);
    }
}

console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["4","13","5","/","+"]));
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
