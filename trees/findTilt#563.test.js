import findTilt from "./findTilt#563";
// Helper function to construct a binary tree from an array representation
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

const constructTreeFromArray = (arr) => {
    if (!arr.length) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift();

        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
};

describe('findTilt', () => {
    it('should return 0 for an empty tree', () => {
        expect(findTilt(null)).toBe(0);
    });

    it('should return 0 for a tree with a single node', () => {
        const root = new TreeNode(5);
        expect(findTilt(root)).toBe(0);
    });

    it('should return the correct tilt for a tree with multiple nodes', () => {
        // Example 1: [4,2,9,3,5,null,7]
        const tree1 = constructTreeFromArray([4, 2, 9, 3, 5, null, 7]);
        expect(findTilt(tree1)).toBe(15);

        // Example 2: [1, 2, 3]
        const tree2 = constructTreeFromArray([1, 2, 3]);
        expect(findTilt(tree2)).toBe(1);

        // Example 3: [21, 7, 14, 1, 1, 2, 2, 3, 3]
        const tree3 = constructTreeFromArray([21, 7, 14, 1, 1, 2, 2, 3, 3]);
        expect(findTilt(tree3)).toBe(9);
    });
});
