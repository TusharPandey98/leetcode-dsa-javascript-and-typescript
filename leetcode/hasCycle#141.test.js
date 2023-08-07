import hasCycle from "./hasCycle#141";

function ListNode(val) {
    this.val = val;
    this.next = null;
}

describe('hasCycle', () => {
    test('No cycle in the linked list', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);

        expect(hasCycle(head)).toBe(false);
    });

    test('Cycle in the linked list', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = head.next; // Creating a cycle

        expect(hasCycle(head)).toBe(true);
    });

    test('Single node linked list (cycle)', () => {
        const head = new ListNode(1);
        head.next = head; // Creating a cycle

        expect(hasCycle(head)).toBe(true);
    });

    test('Single node linked list (no cycle)', () => {
        const head = new ListNode(1);

        expect(hasCycle(head)).toBe(false);
    });
});