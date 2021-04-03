/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    let words1 = sentence1.split(' ');
    let words2 = sentence2.split(' ');

    let l = 0;
    for (; l < words1.length && l < words2.length; l++) {
        if (words1[l] !== words2[l]) {
            break;
        }
    }

    let r = 0;
    for (; words1.length - r > 0 && words2.length - r > 0; r++) {
        if (words1[words1.length - 1 - r] !== words2[words2.length - 1 - r]) {
            break;
        }
    }

    return l > words1.length - 1 - r || l > words2.length - 1 - r;
};

console.log(areSentencesSimilar('My name is Haley', 'My Haley'));
console.log(areSentencesSimilar('of', 'A lot of words'));
console.log(areSentencesSimilar('Eating right now', 'Eating'));
console.log(areSentencesSimilar('Luky', 'Lucccky'));
