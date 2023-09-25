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
const findTilt = (root) => {
    let totalTilt = 0;

    const sumOfSubtree = (node) => {
        if (!node) return 0;

        const leftSum = sumOfSubtree(node.left);
        const rightSum = sumOfSubtree(node.right);

        totalTilt += Math.abs(rightSum - leftSum);

        return node.val + rightSum + leftSum;
    }

    sumOfSubtree(root);

    return totalTilt;
};

// class TreeNode {
//     constructor(val, left, right) {
//         this.val = (val === undefined ? 0 : val);
//         this.left = (left === undefined ? null : left);
//         this.right = (right === undefined ? null : right);
//     }
// }

// const root = new TreeNode(4);
// root.left = new TreeNode(2);
// root.right = new TreeNode(9);
// root.left.left = new TreeNode(3);
// root.left.right = new TreeNode(5);
// root.right.right = new TreeNode(7);

// console.log(findTilt(root));

export default findTilt;