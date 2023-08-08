import getIntersectionNode from "./getIntersectionNode#160";

function ListNode(val,next=null) {
    this.val = val;
    this.next = next;
}
describe('Intersection of Two Linked Lists', () => {
    test('Lists intersect at a node', () => {
        const intersectNode = new ListNode(8);
        const listA = new ListNode(1, new ListNode(3, intersectNode));
        const listB = new ListNode(7, new ListNode(9, new ListNode(11, intersectNode)));

        const result = getIntersectionNode(listA, listB);

        expect(result).toBe(intersectNode);
    });

    test('Lists do not intersect', () => {
        const listA = new ListNode(1, new ListNode(2, new ListNode(3)));
        const listB = new ListNode(4, new ListNode(5, new ListNode(6)));

        const result = getIntersectionNode(listA, listB);

        expect(result).toBeNull();
    });

    test('One list is a subset of the other', () => {
        const intersectNode = new ListNode(4);
        const listA = new ListNode(1, new ListNode(2, intersectNode));
        const listB = intersectNode;

        const result = getIntersectionNode(listA, listB);

        expect(result).toBe(intersectNode);
    });

    test('Intersection node is at the end of one list', () => {
        const intersectNode = new ListNode(5);
        const listA = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, intersectNode))));
        const listB = intersectNode;

        const result = getIntersectionNode(listA, listB);

        expect(result).toBe(intersectNode);
    });

    test('Both lists are the same', () => {
        const intersectNode = new ListNode(5);
        const listA = intersectNode;
        const listB = intersectNode;

        const result = getIntersectionNode(listA, listB);

        expect(result).toBe(intersectNode);
    });
});
