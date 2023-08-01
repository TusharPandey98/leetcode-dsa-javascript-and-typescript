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

/**BFS */
// const maxDepth = (root) => {
//     if (!root) return 0;
//     let maxDepth = 0, queue = [root];
//     while (queue.length > 0) {
//         //Track the number of nodes at current level
//         let levelSize = queue.length;
//         while (levelSize > 0) {
//             let current = queue.shift();
//             if (current.left) queue.push(current.left)
//             if (current.right) queue.push(current.right)
//             levelSize--;
//         }
//         maxDepth++;
//     }
//     return maxDepth;
// };

/**DFS Recursive */
const maxDepth = (root) => {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

/**DFS using stack */
// const maxDepth = (root) => {
//     if (!root) return 0;
    
//     const nodeStack = [root];
//     const depthStack = [1];
//     let maxDepth = 0;
    
//     while (nodeStack.length > 0) {
//         const node = nodeStack.pop();
//         const depth = depthStack.pop();
        
//         if (depth > maxDepth) {
//             maxDepth = depth;
//         }
        
//         if (node.left) {
//             nodeStack.push(node.left);
//             depthStack.push(depth + 1);
//         }
        
//         if (node.right) {
//             nodeStack.push(node.right);
//             depthStack.push(depth + 1);
//         }
//     }
    
//     return maxDepth;
// };
/**DFS using object in stack */

// const maxDepth = (root) => {
//     if (!root) return 0;
    
//     const stack = [{ node: root, depth: 1 }];
//     let maxDepth = 0;
    
//     while (stack.length > 0) {
//         const { node, depth } = stack.pop();
        
//         if (depth > maxDepth) {
//             maxDepth = depth;
//         }
        
//         if (node.left) {
//             stack.push({ node: node.left, depth: depth + 1 });
//         }
        
//         if (node.right) {
//             stack.push({ node: node.right, depth: depth + 1 });
//         }
//     }
    
//     return maxDepth;
// };

// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }

// const root = new TreeNode(3);
// const node1 = new TreeNode(9);
// const node2 = new TreeNode(20);
// const node3 = new TreeNode(15);
// const node4 = new TreeNode(7);

// root.left = node1;

// root.right = node2;
// node2.left = node3;
// node2.right = node4;

// console.log(maxDepth(root));

export default maxDepth;