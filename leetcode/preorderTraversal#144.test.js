import preorderTraversal from "./preorderTraversal#144"

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

describe('preorderTraversal', () => {
    test('Empty tree', () => {
        expect(preorderTraversal(null)).toEqual([]);
    });

    test('Single node tree', () => {
        const root = new TreeNode(1);
        expect(preorderTraversal(root)).toEqual([1]);
    });

    test('Complete binary tree', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);

        expect(preorderTraversal(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
    });

    test('Skewed tree', () => {
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);
        root.right.right.right = new TreeNode(4);

        expect(preorderTraversal(root)).toEqual([1, 2, 3, 4]);
    });
});