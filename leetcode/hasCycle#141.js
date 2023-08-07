/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    if (!head) return false;
    let slow = head, fast = head;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }
    return false;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// const head = new ListNode(1);
// const second = new ListNode(2);
// head.next = second;
// second.next = head;
// const createListNode = (arr) => {
//     if(arr.length ===0) return ListNode(null);

// }

// let head = new ListNode(3);
// let node1 = new ListNode(2);
// let node2 = new ListNode(0);
// let node3 = new ListNode(-4);

// head.next = node1;
// node1.next = node2;
// node2.next = node3;
// node3.next = node1;

// console.log(hasCycle(head));
export default hasCycle;