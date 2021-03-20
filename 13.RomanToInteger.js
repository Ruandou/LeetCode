/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;

    let map = {
        'M':    1000,
        'D':    500,
        'L':    50,
        'V':    5
    }

    let complexMap = {
        'CM':   900,
        'CD':   400,
        'C':    100,
        'XC':   90,
        'XL':   40,
        'X':    10,
        'IX':   9,
        'IV':   4,
        'I':    1
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            result += map[s[i]];
        } else {
            if (i + 1 < s.length) {
                let key = s[i] + s[i + 1];
                if (key in complexMap) {
                    result += complexMap[key];
                    i++;
                    continue;
                }
            }

            result += complexMap[s[i]];
        }
    }

    return result;
};

console.log(romanToInt('MCDLXXVI'));
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
