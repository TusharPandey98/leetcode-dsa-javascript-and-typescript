import countNodes from "./countNodes#222";

// Import the function if needed
// const countNodes = require('./yourFileContainingCountNodes');

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

describe('countNodes', () => {
    it('should return 0 for an empty tree', () => {
        const root = null;
        expect(countNodes(root)).toBe(0);
    });

    it('should return the correct count for a single-node tree', () => {
        const root = new TreeNode(1);
        expect(countNodes(root)).toBe(1);
    });

    it('should return the correct count for a balanced tree', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);

        expect(countNodes(root)).toBe(7);
    });

    it('should return the correct count for an unbalanced tree', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(3);
        root.left.left.left = new TreeNode(4);

        expect(countNodes(root)).toBe(4);
    });
});
