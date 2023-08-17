import invertTree from "./invertTree#226";

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

describe('invertTree', () => {
    it('should invert a binary tree correctly', () => {
        /*
        Initial tree:
              1
             / \
            2   3
           / \
          4   5
        Inverted tree:
              1
             / \
            3   2
               / \
              5   4
        */

        const root = new TreeNode(1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3)
        );

        const invertedRoot = invertTree(root);

        expect(invertedRoot.val).toBe(1);
        expect(invertedRoot.left.val).toBe(3);
        expect(invertedRoot.right.val).toBe(2);
        expect(invertedRoot.left.left).toBe(null);
        expect(invertedRoot.left.right).toBe(null);
        expect(invertedRoot.right.left.val).toBe(5);
        expect(invertedRoot.right.right.val).toBe(4);
    });
});
