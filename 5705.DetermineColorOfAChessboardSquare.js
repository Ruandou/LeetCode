/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let map = [...'abcdefgh'].reduce((result, c, i) => {
        result[c] = i + 1;
        return result;
    }, {});

    return ((map[coordinates[0]] + Number(coordinates[1])) % 2) === 1;
};

console.log(squareIsWhite('a1'));
console.log(squareIsWhite('h3'));
console.log(squareIsWhite('c7'));
