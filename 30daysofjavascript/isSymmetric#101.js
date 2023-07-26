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
 * @return {boolean}
 */
// const isSymmetric = (root) => {
//     if (!root) return true;
//     return isSame(root.left, root.right);
// };

// const isSame = (leftRoot, rightRoot) => {
//     if ((!leftRoot && rightRoot) || (leftRoot && !rightRoot) || (leftRoot && rightRoot && leftRoot.val !== rightRoot.val)) {
//         return false;
//     }
//     if (leftRoot && rightRoot) {
//         return isSame(leftRoot.left, rightRoot.right) && isSame(leftRoot.right, rightRoot.left);
//     }
//     return true;
// }

//Using BFS or Itreative method

const isSymmetric = (root) => {
    if (!root) return true;

    const stack = [root.left, root.right];

    while (stack.length > 0) {
        const rightNode = stack.pop();
        const leftNode = stack.pop();

        if (!leftNode && !rightNode) continue;
        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
            return false;
        }

        stack.push(leftNode.left, rightNode.right);
        stack.push(leftNode.right, rightNode.left);
    }

    return true;
};