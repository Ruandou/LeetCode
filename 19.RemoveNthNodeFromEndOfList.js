/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
    head = { next: head };

    let i = length(head.next) - n;
    let p = head;

    while (i--) {
        p = p.next;
    }

    p.next = p.next.next;

    return head.next;
};

var length = function (head) {
    let i = 0;
    let p = head;

    while (p) {
        i++;
        p = p.next;
    }

    return i;
};
