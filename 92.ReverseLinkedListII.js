/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (left === right) {
        return head;
    }

    head = { next: head };

    let pLeft = findNode(head, left - 1);
    let pRight = findNode(head, right - 1);
    let pStart = pLeft.next;

    pLeft.next = pRight.next;
    pLeft = pLeft.next;
    pRight.next = null;

    let p;
    do {
        p = pStart.next;

        pStart.next = pLeft.next;
        pLeft.next = pStart;
        pStart = p;
    } while (pStart)

    return head.next;
};

var findNode = function(head, index) {
    for (let p = head, i = 0; p; p = p.next, i++) {
        if (i === index) {
            return p;
        }
    }
}
