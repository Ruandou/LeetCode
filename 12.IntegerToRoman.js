/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = [];
    let pairs = [
        [1000,  'M'],
        [900,   'CM'],
        [500,   'D'],
        [400,   'CD'],
        [100,   'C'],
        [90,    'XC'],
        [50,    'L'],
        [40,    'XL'],
        [10,    'X'],
        [9,     'IX'],
        [5,     'V'],
        [4,     'IV'],
        [1,     'I']
    ];

    for (let i = 0; i < pairs.length; i++) {
        num = judge(result, num, ...pairs[i]);
    }

    return result.join('');
};

var judge = function (result, num, threshold, value) {
    if (num >= threshold) {
        let n = parseInt(num / threshold);

        for (let i = 0; i < n; i++) {
            result.push(value);
        }

        return num = num - n * threshold;
    }

    return num;
}

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));
