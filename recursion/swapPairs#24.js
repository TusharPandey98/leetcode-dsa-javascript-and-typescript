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
// const swapPairs = (head) => {
//   if (head == null || head.next == null) return head;

//   let currHead = head;
//   let nextHead = head.next;
//   let skipHead = head.next.next;

//   // relink the second node to the first node
//   nextHead.next = currHead;

//   // the firstNode's next would be the result of the swap
//   currHead.next = swapPairs(skipHead);

//   // nextHead targets the 2nd node, which would be the first node if it reversed
//   return nextHead;
// };

const swapPairs = (head) => {
  if (!head || !head.next) return head;

  let first = head,
    second = head.next;
  first.next = swapPairs(second.next);
  second.next = first;

  return second;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log(swapPairs(head));
