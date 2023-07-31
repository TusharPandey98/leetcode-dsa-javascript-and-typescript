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
// var isBalanced = function (root) {
//     if (!root) return true;

//     function height(node) {
//         if (!node) return 0;
//         return Math.max(height(node.left), height(node.right)) + 1;
//     }

//     const queue = [root];

//     while (queue.length > 0) {
//         const currentNode = queue.shift();
//         const leftHeight = height(currentNode.left);
//         const rightHeight = height(currentNode.right);

//         if (Math.abs(leftHeight - rightHeight) > 1) return false;

//         if (currentNode.left) queue.push(currentNode.left)
//         if (currentNode.right) queue.push(currentNode.right);
//     }

//     return true;
// };


/**Using recurssion */
const isBalanced = (root) => {
    const getHeight = (node) => {
        if (!node) return 0;

        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);

        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }

    return getHeight(root) !== -1;
}
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(3);
const node1 = new TreeNode(9), node2 = new TreeNode(20);
const node3 = new TreeNode(15), node4 = new TreeNode(7);

root.left = node1;
root.right = node2;
node2.left = node3;
node2.right = node4;

console.log(isBalanced(root));