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
 * @return {string[]}
 */
//using bfs uith queue
// const binaryTreePaths = (root) => {
//     if (!root) return [];
//     const result = [];
//     const queue = [{ node: root, path: '' }];

//     while (queue.length) {
//         const { node, path } = queue.shift();

//         if (!node.left && !node.right) {
//             result.push(path + node.val);
//         }

//         if (node.right) {
//             queue.push({ node: node.right, path: path + node.val + '->' });
//         }
//         if (node.left) {
//             queue.push({ node: node.left, path: path + node.val + '->' });
//         }

//     }

//     return result;
// };

//using dfs recurssion
const binaryTreePaths = (root) => {
    if (!root) return [];
    const result = [];
    
    const traverse = (node, path) => {
        if (!node.left && !node.right) {
            result.push(path + node.val);
            return;
        }
        if (node.left) traverse(node.left, path + node.val + '->');
        if (node.right) traverse(node.right, path + node.val + '->');
    };
    
    traverse(root, '');
    
    return result;
};


// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }

// const head = new TreeNode(1);
// head.left = new TreeNode(2);
// head.right = new TreeNode(3);
// // head.left.left = new TreeNode(1);
// head.left.right = new TreeNode(5);

// console.log(binaryTreePaths(head));
export default binaryTreePaths;