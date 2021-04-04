/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    let result = 0;

    let map = new Map();
    for (let i = 0; i < answers.length; i++) {
        if (answers[i]) {
            let key = answers[i];
            if (!map.has(key) || map.get(key) > key) {
                result += answers[i] + 1;

                map.set(key, 1);
            } else {
                map.set(key, map.get(key) + 1);
            }
        } else {
            result++;
        }
    }

    return result;
};

console.log(numRabbits([0,0,1,1,1]));
console.log(numRabbits([1, 1, 2]));
console.log(numRabbits([10, 10, 10]));
console.log(numRabbits([]));
