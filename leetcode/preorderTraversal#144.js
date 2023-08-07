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
 * @return {number[]}
 */
// const preorderTraversal = (root) => {
//     if (!root) return [];
//     const nodeValues = [];
//     const preOrder = (node) => {
//         if (node === null) return;
//         nodeValues.push(node.val);
//         preOrder(node.left);
//         preOrder(node.right);
//     }
//     preOrder(root);
//     return nodeValues;
// };

const preorderTraversal = (root) => {
    if (!root) return [];
    let result = [], stack = [];
    stack.push(root);
    
    while (stack.length) {
        let currentNode = stack.pop();
        result.push(currentNode.val);
        if (currentNode.right) stack.push(currentNode.right);
        if (currentNode.left) stack.push(currentNode.left);
    }
    
    return result;
};


// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }




// console.log(preorderTraversal(createBinaryTree([1, null, 2, 3])));
export default preorderTraversal;
