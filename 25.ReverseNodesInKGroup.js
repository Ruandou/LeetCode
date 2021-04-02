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
 var reverseKGroup = function (head, k) {
    if (k === 1) {
        return head;
    }

    head = { next: head };

    let l = len(head);
    let p = head;
    let r = Math.floor(l / k);

    while (r--) {
        p = reverse(p, k);
    }

    return head.next;
};

var len = function (head) {
    let result = 0;

    let p = head.next;
    while (p) {
        result++;
        p = p.next;
    }

    return result;
}

var reverse = function (head, k) {
    let p = head.next;

    for (let i = 0; i < k - 1; i++) {
        let q = p.next;

        p.next = p.next.next;
        q.next = head.next;
        head.next = q;
    }

    return p;
}
