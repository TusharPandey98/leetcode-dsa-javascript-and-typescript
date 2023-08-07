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
// const postorderTraversal = (root) => {
//     if(!root) return [];
//     const result = [];
//     const traverse = (node) =>{
//         if(node == null) return;
//         traverse(node.left);
//         traverse(node.right);
//         result.push(node.val);
//     }
//     traverse(root);
//     return result;
// };

const postorderTraversal = (root) => {
    const result = [];

    if (!root) return result;
    const stack = [[root, false]];

    while (stack.length) {
        let [node, processed] = stack.pop();
        if (processed) {
            result.push(node.val);
        } else {
            stack.push([node, true]);
            if (node.right) stack.push([node.right, false]);
            if (node.left) stack.push([node.left, false]);
        }
    }
    return result;
};

// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }

// let root = new TreeNode(1);
// root.left = new TreeNode(null);
// root.right = new TreeNode(2);
// root.right.left = new TreeNode(3);

// console.log(postorderTraversal(root));

export default postorderTraversal;
