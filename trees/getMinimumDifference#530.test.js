import getMinimumDifference from "./getMinimumDifference#530";

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
describe('getMinimumDifference test cases', () => {
    test('Minimum absolute difference in a BST', () => {
        const root1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6));
        expect(getMinimumDifference(root1)).toBe(1);

        const root2 = new TreeNode(1, new TreeNode(0), new TreeNode(48, null, new TreeNode(12, null, new TreeNode(49))));
        expect(getMinimumDifference(root2)).toBe(1);

        // Add more test cases as needed
    });
})
