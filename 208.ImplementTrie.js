/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let root = this.root;

    for (let i = 0; i < word.length; i++) {
        if (!root[word[i]]) {
            root[word[i]] = {}
        }

        root = root[word[i]];
    }

    root.isWordEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let root = this.root;

    for (let i = 0; i < word.length; i++) {
        if (!root[word[i]]) {
            return false;
        }

        root = root[word[i]];
    }

    return !!root.isWordEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let root = this.root;

    for (let i = 0; i < prefix.length; i++) {
        if (!root[prefix[i]]) {
            return false;
        }

        root = root[prefix[i]];
    }

    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */