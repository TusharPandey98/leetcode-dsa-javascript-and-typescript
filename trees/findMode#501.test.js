class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

import findMode from "./findMode#501";

describe('findMode', () => {
    it('should return [2] for input [1, null, 2, 2]', () => {
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.left = new TreeNode(2);
        const result = findMode(root);
        expect(result).toEqual([2]);
    });

    it('should return [0] for input [0]', () => {
        const root = new TreeNode(0);
        const result = findMode(root);
        expect(result).toEqual([0]);
    });

    it('should return [2] for input [2, 2]', () => {
        const root = new TreeNode(2);
        root.left = new TreeNode(2);
        const result = findMode(root);
        expect(result).toEqual([2]);
    });

    it('should return [1, 2] for input [1, null, 2]', () => {
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        const result = findMode(root);
        expect(result).toEqual([1, 2]);
    });

    it('should return [] for an empty tree', () => {
        const result = findMode(null);
        expect(result).toEqual([]);
    });
});
