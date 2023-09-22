/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
    if (!root) return 0;
    let maxDiameter = 0;

    const dfs = (node) => {
        if (!node) return 0;

        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);

        maxDiameter = Math.max(leftDepth + rightDepth, maxDiameter)

        return Math.max(leftDepth, rightDepth) + 1;
    }

    dfs(root);

    return maxDiameter;
};

// class TreeNode {
//     constructor(val, left, right) {
//         this.val = (val === undefined ? 0 : val);
//         this.left = (left === undefined ? null : left);
//         this.right = (right === undefined ? null : right);
//     }
// }

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// console.log(diameterOfBinaryTree(root));

export default diameterOfBinaryTree;
