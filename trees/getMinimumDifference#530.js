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
// let diff = 10;
// var getMinimumDifference = function (root) {
//     if (!root) return 0;
//     if (root.left) {
//         diff = Math.min(Math.abs(root.val - root.left.val), diff);
//         getMinimumDifference(root.left)
//     }
//     if (root.right) {
//         diff = Math.min(Math.abs(root.val - root.right.val), diff);
//         getMinimumDifference(root.right)
//     }
// };


const getMinimumDifference = (root) => {
    let prev = null;
    let minDiff = Infinity;

    const inOrderTraversal = (node) => {
        if (!node) return;

        inOrderTraversal(node.left);

        if (prev != null) {
            minDiff = Math.min(minDiff, Math.abs(node.val - prev))
        }
        prev = node.val;

        inOrderTraversal(node.right)
    }

    inOrderTraversal(root);
    return minDiff;
};

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

// const root = new TreeNode(4)
// root.left = new TreeNode(2)
// root.right = new TreeNode(6);
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(3);

// console.log(getMinimumDifference(root));
export default getMinimumDifference;