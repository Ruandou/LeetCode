/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let q = head = { next: head };

    for (; q.next && q.next.next;) {
        p = q.next;
        q.next = q.next.next;
        p.next = q.next.next;
        q.next.next = p;

        q = q.next.next;
    }

    return head.next;
};
