/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let h = head = { next: null };
    let p = l1;
    let q = l2;

    while (p && q) {
        if (p.val < q.val) {
            h.next = p;
            p = p.next;
        } else {
            h.next = q;
            q = q.next;
        }

        h = h.next;
    }

    if (p) {
        h.next = p;
    }

    if (q) {
        h.next = q;
    }

    return head.next;
};
