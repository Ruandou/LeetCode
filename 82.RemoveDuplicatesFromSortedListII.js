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
    if (!head) {
        return head;
    }

    head = { next: head };

    let count = 1;
    let value = head.next.val;
    let pValue = head;

    for (let p = head.next; p.next; p = p.next) {
        if (p.next.val === value) {
            count++;
        } else {
            value = p.next.val;

            if (count > 1) {
                pValue.next = p.next;
                count = 1;
            } else {
                pValue = pValue.next;
            }
        }
    }

    if (count > 1) {
        pValue.next = null;
    }

    return head.next;
};
