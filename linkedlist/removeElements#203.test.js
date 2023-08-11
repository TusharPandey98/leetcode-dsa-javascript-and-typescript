import removeElements from "./removeElements#203";

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

describe('removeElements', () => {
    test('removes all occurrences of a value from the list', () => {
        // Create a linked list: 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(6);
        head.next.next.next = new ListNode(3);
        head.next.next.next.next = new ListNode(4);
        head.next.next.next.next.next = new ListNode(5);
        head.next.next.next.next.next.next = new ListNode(6);

        const valToRemove = 6;
        const expectedList = new ListNode(1);
        expectedList.next = new ListNode(2);
        expectedList.next.next = new ListNode(3);
        expectedList.next.next.next = new ListNode(4);
        expectedList.next.next.next.next = new ListNode(5);

        const result = removeElements(head, valToRemove);

        // Compare the resulting list with the expected list
        let resultNode = result;
        let expectedNode = expectedList;
        while (resultNode && expectedNode) {
            expect(resultNode.val).toBe(expectedNode.val);
            resultNode = resultNode.next;
            expectedNode = expectedNode.next;
        }
        expect(resultNode).toBeNull();
        expect(expectedNode).toBeNull();
    });

    test('removes all elements when all elements have the same value', () => {
        // Create a linked list: 6 -> 6 -> 6 -> 6 -> 6
        const head = new ListNode(6);
        head.next = new ListNode(6);
        head.next.next = new ListNode(6);
        head.next.next.next = new ListNode(6);
        head.next.next.next.next = new ListNode(6);

        const valToRemove = 6;
        const expectedList = null; // After removing all nodes, the list becomes empty

        const result = removeElements(head, valToRemove);

        expect(result).toEqual(expectedList);
    });

    test('removes elements from an empty list', () => {
        const head = null; // Empty list

        const valToRemove = 5; // Value to remove doesn't matter for an empty list
        const expectedList = null; // List remains empty

        const result = removeElements(head, valToRemove);

        expect(result).toEqual(expectedList);
    });
});
