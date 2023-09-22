import diameterOfBinaryTree from "./diameterOfBinaryTree#543";

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

describe('diameterOfBinaryTree function', () => {
    it('should return the correct diameter for a binary tree', () => {
        const root1 = new TreeNode(1);
        root1.left = new TreeNode(2);
        root1.right = new TreeNode(3);
        root1.left.left = new TreeNode(4);
        root1.left.right = new TreeNode(5);
        expect(diameterOfBinaryTree(root1)).toBe(3);

        const root2 = new TreeNode(1);
        root2.left = new TreeNode(2);
        expect(diameterOfBinaryTree(root2)).toBe(1);

        const root3 = new TreeNode(1);
        root3.left = new TreeNode(2);
        root3.right = new TreeNode(3);
        root3.left.left = new TreeNode(4);
        root3.left.right = new TreeNode(5);
        root3.left.right.left = new TreeNode(6);
        expect(diameterOfBinaryTree(root3)).toBe(4);
    });

    it('should return 0 for an empty tree', () => {
        expect(diameterOfBinaryTree(null)).toBe(0);
    });
});