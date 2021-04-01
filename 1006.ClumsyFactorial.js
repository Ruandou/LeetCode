/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
    let stack = [N];

    for (let i = N - 1; i > 0; i--) {
        let mod = (N - i - 1) % 4

        if (mod === 0) {
            stack.push(stack.pop() * i);
        } else if (mod === 1) {
            stack.push(Math.floor(stack.pop() / i));
        } else {
            stack.push(i);
        }
    }

    let result = stack[0];

    for (let i = 1; i < stack.length; i++) {
        if (i % 2 === 1) {
            result = result + stack[i];
        } else {
            result = result - stack[i];
        }
    }

    return result;
};

console.log(clumsy(1));
console.log(clumsy(4));
console.log(clumsy(10));
