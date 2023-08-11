/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode} 
 */

const removeElements = (head, val) => {
    if (!head) return null;
    while (head) {
        if (head.val === val) head = head.next;
        else break;
    }

    let current = head;
    while (current && current.next) {
        if (current.next.val === val) current.next = current.next.next;
        else current = current.next;
    }
    return head;
}

// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }
// let head = new ListNode(7);
// head.next = new ListNode(7);
// head.next.next = new ListNode(7);
// head.next.next.next = new ListNode(4);
// console.log(removeElements(head, 7));

export default removeElements;