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
//recurrsive approach 
// const sumOfLeftLeaves = (root) => {
//     if (!root) return 0;
//     let total = 0;
//     if (root.left) {
//         const currentNode = root.left;
//         if (!currentNode.left && !currentNode.right) total = total + currentNode.val;
//     }
//     total += sumOfLeftLeaves(root.left);
//     total += sumOfLeftLeaves(root.right);
//     return total;
// };

// more elegent
// const sumOfLeftLeaves = (root) => {
//     if (!root) return 0;
//     let total = 0;
//     if (root.left && !root.left.left && !root.left.right) {
//         total = total + root.left.val;
//     }
//     total += sumOfLeftLeaves(root.left);
//     total += sumOfLeftLeaves(root.right);
//     return total;
// };

//iterative appraoch
const sumOfLeftLeaves = (root) => {
    if (!root) return 0;
    let stack = [root], total = 0;
    while (stack.length) {
        let currentNode = stack.pop();
        if (currentNode.right) stack.push(currentNode.right);
        if (currentNode.left) {
            if (!currentNode.left.left && !currentNode.left.right) {
                total += currentNode.left.val;
            }
            stack.push(currentNode.left);
        }
    }
    return total;
}

// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }

// const root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);

// console.log(sumOfLeftLeaves(root));

export default sumOfLeftLeaves;