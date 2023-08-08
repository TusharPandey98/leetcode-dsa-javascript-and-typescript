/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//solved using concating both the lists
// const getIntersectionNode = (headA, headB) => {
//     if (!headA || !headB) return null;
//     let a = headA, b = headB;
//     while (a !== b) {
//         a = a ? a.next : headB;
//         b = b ? b.next : headA;
//     }
//     return a;
// };


// solve using find the differce in lengths of lists
const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) return null;
    let lengthA = 0, lengthB = 0;
    let currentA = headA, currentB = headB;
    //calculate the lengths of both linked lists
    while (currentA.next) {
        lengthA = lengthA + 1;
        currentA = currentA.next;
    }

    while (currentB.next) {
        lengthB = lengthB + 1;
        currentB = currentB.next;
    }
    //Reset the pointers
    currentA = headA, currentB = headB;
    //move the longer pointer ahead by the difference in lengths
    if (lengthA > lengthB) {
        for (let i = 0; i < lengthA - lengthB; i++) {
            currentA = currentA.next;
        }
    } else {
        for (let i = 0; i < lengthB - lengthA; i++) {
            currentB = currentB.next;
        }
    }
    //Traverse both lists simultaneously to find intersection
    while (currentA !== currentB) {
        currentA = currentA.next;
        currentB = currentB.next;
    }
    return currentA; //return the intersection node or null
}

export default getIntersectionNode;