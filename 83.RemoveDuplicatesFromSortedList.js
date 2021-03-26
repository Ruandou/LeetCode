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
var deleteDuplicates = function(head) {
    head = { next: head };

    for (let p = head.next; p && p.next;) {
        if (p.next.val === p.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }

    return head.next;
};
