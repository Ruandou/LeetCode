/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let length = listLength(head);

    k = k % length;
    head = { next: head };

    if (!k) {
        return head.next;
    }

    let lIndex = length - k;
    let lp = findNNode(head.next, lIndex);
    let rp = findNNode(head.next, length);

    let q = lp.next;
    lp.next = rp.next;
    rp.next = head.next;
    head.next = q;

    return head.next;
};

var listLength = function (head) {
    let length = 0;

    p = head;
    while (p) {
        length++;

        p = p.next;
    }

    return length;
}

var findNNode = function (head, n) {
    p = head;

    while (--n) {
        p = p.next;
    }

    return p;
}
