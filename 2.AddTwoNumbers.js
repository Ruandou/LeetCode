
 // Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let lresult = l3 = new ListNode();

    let d = 0;

    for (; l1 && l2; l1 = l1.next, l2 = l2.next) {
        let sum = d + l1.val + l2.val;

        d = Math.floor(sum / 10);
        l3.next = new ListNode(sum % 10);

        l3 = l3.next;
    }

    let ll = l1 || l2;
    for (; ll; ll = ll.next) {
        let sum = d + ll.val;

        d = Math.floor(sum / 10);
        l3.next = new ListNode(sum % 10);

        l3 = l3.next;
    }

    if (d) {
        l3.next = new ListNode(d);
    }

    return lresult.next;
};

var buildList = function (s) {
    let header = l = new ListNode();

    for (let value of s) {
        l.next = new ListNode(value);

        l = l.next;
    }

    return header.next;
}

var list2Str = function (l) {
    let s = '';

    while (l) {
        s += l.val;
        if (l.next) {
            s += ' -> ';
        }

        l = l.next;
    }

    return s;
}

console.log(list2Str(addTwoNumbers(buildList([2, 4, 3]), buildList([5, 6, 4]))));
