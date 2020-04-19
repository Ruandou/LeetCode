/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let h = 0;
    let flag = {};
    let result = 0;
    let length = 0;

    for (let i = 0; i < s.length; i++) {
        let index = flag[s[i]]

        if (index === undefined || index < h) {
            length++;
            
            if (result < length) {
                result = length;
            }
        } else {
            length = i - index;
            
            h = index + 1;
        }

        flag[s[i]] = i;
    }
    
    return result;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
