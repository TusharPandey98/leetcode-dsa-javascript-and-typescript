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
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/** Itrative method */
// const deleteDuplicates = function(head) {
//     if(!head) return;
//     let current = head;
//     while(current.next){
//         if(current.next.val === current.val){
//             current.next = current.next.next;
//         }else{
//             current = current.next;
//         }
//     }
//     return head;
// };

/**Recursive approach */
// const deleteDuplicates = (head) =>{
//     if(!head || !head.next) return head;
//     head.next = deleteDuplicates(head.next);
//     return head.val = head.next.val ? head.next : head;
// }

/**Two pointer appraoch */

const deleteDuplicates = (head) =>{
    if(!head) return head;
    let current = head, unique = head;
    while(current.next){
        if(current.next.val !== current.val){
            unique.next = current.next;
            unique = unique.next;
        }
        current = current.next;
    }
    unique.next = null;
    return head;

}

let head = new ListNode(1,null);
let node = new ListNode(1);
let node1= new ListNode(2);
let node2= new ListNode(3);
let node3= new ListNode(3);

head.next = node
node.next = node1;
node1.next = node2;
node2.next = node3;
deleteDuplicates(head)
console.log(head);