/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let head = p = { next: null };

    let flag;
    let curIndex;
    let curValue;

    do {
        flag = false;
        curIndex = -1;
        curValue = Infinity;

        for (let i = 0; i < lists.length; i++) {
            if (lists[i]) {
                flag = true;

                if (lists[i].val < curValue) {
                    curIndex = i;
                    curValue = lists[i].val;
                }
            }
        }

        if (flag) {
            p.next = lists[curIndex];
            p = p.next;
            lists[curIndex] = lists[curIndex].next;
        }
    } while (flag);

    p.next = null;

    return head.next;
};
