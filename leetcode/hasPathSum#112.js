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
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function (root, targetSum) {
//     if (!root) return false;
//     let queue = [root];
//     let leftTotal = 0 ,rightTotal = 0;
//     while (queue.length > 0){
//         //get the first node of queue
//         let node = queue.shift();
//         if(node.left !== null){
//             leftTotal = leftTotal + node.val;
//             if(leftTotal <= targetSum){
//                 queue.push(node.left)
//             }
//         }
//         if(node.right !== null){
//             rightTotal = rightTotal + node.val;
//             if(rightTotal <= targetSum){
//                 queue.push(node.right)
//             }
//         }
//     }

//     return [leftTotal,rightTotal];
// };

/**Using Dfs recurrsion */
const hasPathSum = (root, targetSum) => {
    if (!root) return false;
    if (!root.left && !root.right) {
        return targetSum === root.val;
    } else {
        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    }
}

/**Dfs using stack , iterative appraoch */
// const hasPathSum = (root,targetSum) => {
//     if (!root) return false;

//     const stack = [];
//     stack.push({ node: root, sum: 0 });

//     while(stack.length > 0){
//         const {node,sum} = stack.pop();
//         const currentSum = sum + node.val;

//         if(!node.left && !node.right && currentSum === targetSum){
//             return true;
//         }

//         if(node.left) stack.push({node : node.left , sum : currentSum});
//         if(node.right) stack.push({node : node.right , sum : currentSum});
//     }
//     return false;
// }

//Using bfs

// function hasPathSum(root, targetSum) {
//     if (!root) return false;

//     const queue = [{ node: root, sum: 0 }];

//     while (queue.length > 0) {
//         const { node, sum } = queue.shift();
//         const currentSum = sum + node.val;

//         if (!node.left && !node.right && currentSum === targetSum) {
//             return true;
//         }

//         if (node.left) {
//             queue.push({ node: node.left, sum: currentSum });
//         }

//         if (node.right) {
//             queue.push({ node: node.right, sum: currentSum });
//         }
//     }

//     return false;
// }


// console.log(hasPathSum(createBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22));
export default hasPathSum;