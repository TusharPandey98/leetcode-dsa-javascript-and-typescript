import sumOfLeftLeaves from "./sumOfLeftLeaves#404";

// Define a TreeNode class for constructing the binary tree
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

describe('sumOfLeftLeaves', () => {
    it('should return the sum of left leaves in a binary tree', () => {
        // Create a binary tree for testing
        const root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        expect(sumOfLeftLeaves(root)).toBe(24); // 9 + 15 = 24
    });

    it('should handle a tree with only one node', () => {
        const root = new TreeNode(1);
        expect(sumOfLeftLeaves(root)).toBe(0); // No left leaves
    });

    it('should handle a tree with no left leaves', () => {
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        expect(sumOfLeftLeaves(root)).toBe(0); // No left leaves
    });

    it('should handle a tree with no right leaves', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        expect(sumOfLeftLeaves(root)).toBe(2); // Only 2 is a left leaf
    });

    it('should handle a tree with no leaves', () => {
        const root = null;
        expect(sumOfLeftLeaves(root)).toBe(0); // No leaves
    });
});
