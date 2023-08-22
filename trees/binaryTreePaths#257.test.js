import binaryTreePaths from "./binaryTreePaths#257";

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

describe('binaryTreePaths', () => {
    test('should return an array of paths for a simple tree', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.right = new TreeNode(5);

        const paths = binaryTreePaths(root);

        expect(paths).toEqual(['1->2->5', '1->3']);
    });

    test('should return an empty array for an empty tree', () => {
        const paths = binaryTreePaths(null);
        expect(paths).toEqual([]);
    });
});
