import hasPathSum from "./hasPathSum#112";

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function createBinaryTree(arr) {
    if (arr.length === 0) return null;
    const nodes = arr.map(val => (val === null ? null : new TreeNode(val)));
    const len = nodes.length;
    for (let i = 0; i < len; i++) {
        if (nodes[i] !== null) {
            const leftIndex = 2 * i + 1;
            const rightIndex = 2 * i + 2;
            nodes[i].left = leftIndex < len ? nodes[leftIndex] : null;
            nodes[i].right = rightIndex < len ? nodes[rightIndex] : null;
        }
    }
    return nodes[0];
}

describe('hasPathSumIterative', () => {
    test('Empty tree should return false', () => {
        const root = createBinaryTree([]);
        expect(hasPathSum(root, 10)).toBe(false);
    });

    test('Single node with target sum should return true', () => {
        const root = createBinaryTree([10]);
        expect(hasPathSum(root, 10)).toBe(true);
    });

    test('Valid path with target sum should return true', () => {
        const root = createBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1]);
        expect(hasPathSum(root, 22)).toBe(true);
    });

    test('Invalid path with target sum should return false', () => {
        const root = createBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1]);
        expect(hasPathSum(root, 27)).toBe(true);
    });

    test('Negative values in the tree should work correctly', () => {
        const root = createBinaryTree([3, 1, 7, -2, -3, 6, 4]);
        expect(hasPathSum(root, 16)).toBe(true);
        expect(hasPathSum(root, 1)).toBe(true);
        expect(hasPathSum(root, 14)).toBe(true);
    });
});
