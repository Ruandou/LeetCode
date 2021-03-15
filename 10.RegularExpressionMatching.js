/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function (s, p) {
    return doMatch(s, 0, p, 0)
};

var doMatch = function (s, sl, p, pl) {
    if (sl === s.length && pl === p.length) {
        return true
    }

    if (sl === s.length) {
        if (isNextStar(p, pl + 1)) {
            return doMatch(s, sl, p, nextNotStarIndex(p, pl + 1))
        } else {
            return false
        }
    }

    if (pl === p.length) {
        return false
    }

    let result = false

    if (isEqual(s[sl], p[pl])) {
        result = doMatch(s, sl + 1, p, nextNotStarIndex(p, pl + 1))
        if (!result && isNextStar(p, pl + 1)) {
            result = doMatch(s, sl + 1, p, pl)
        }
    } 

    if (!result) {
        if (isNextStar(p, pl + 1)) {
            result = doMatch(s, sl, p, nextNotStarIndex(p, pl + 1))
        }
    }

    return result
};

var isEqual = function (a, b) {
    return a === b || a === '.' || b === '.'
}

var isNextStar = function (p, l) {
    return l < p.length && p[l] === '*'
}

var nextNotStarIndex = function (p, l) {
    while (isNextStar(p, l)) {
        l++
    }

    return l
}

console.log(isMatch('a', 'a*a'))
console.log(isMatch('bbbba', '.*a*a'))
console.log(isMatch('a', 'ab*'))
console.log(isMatch('aab', 'c*a*b'))
console.log(isMatch('mississippi', 'mis*is*p*.'))
