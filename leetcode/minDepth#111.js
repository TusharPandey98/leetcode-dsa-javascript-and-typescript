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
/**Using dfs recursion */
const minDepth = (root) => {
    if (!root) return 0;
    if (root.left === null) return 1 + minDepth(root.right);
    if (root.right === null) return 1 + minDepth(root.left);
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

/**Using BFs ,queue */
// var minDepth = function(root) {
//     if(!root) return 0;
//     let depth = 1;
//     let queue = [root];
//     if(!root.left && !root.right) return depth;

//     while(queue.length > 0 ){
//       let queueLength = queue.length;

//       for(let i = 0; i < queueLength; i++){
//         let node = queue.shift();

//         if(!node.left && !node.right) return depth;
//         else{
//           if(node.left) queue.push(node.left);
//           if(node.right) queue.push(node.right);
//         }
//       }

//       depth++;
//     }

//     return depth;
// }
// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }

// const root = new TreeNode(3);
// let node = new TreeNode(9);
// let node1 = new TreeNode(20);
// let node2 = new TreeNode(15);
// let node3 = new TreeNode(7);

// root.right = node;
// node.right = node1;
// node1.right = node2;
// node2.right = node3;

// console.log(minDepth(root)); 
export default minDepth;