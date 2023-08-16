/**
 * @param {TreeNode} root
 * @return {number}
 */

//USING STACK
// const countNodes = (root) => {
//     if (!root) return 0;
    
//     let count = 0;
//     const stack = [root];
    
//     while (stack.length) {
//         const currentNode = stack.pop();
        
//         if (currentNode) {
//             count++;
//             stack.push(currentNode.left);
//             stack.push(currentNode.right);
//         }
//     }
    
//     return count;
// }
//USING RECURSIVE CALL

const countNodes = (root) => {
    if (!root) return 0;

    return 1 + countNodes(root.left) + countNodes(root.right);
};

// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// const root = new TreeNode(5);
// root.left = new TreeNode(4);
// root.right = new TreeNode(6);
// root.left.left = new TreeNode(3);

// console.log(countNodes(root));

export default countNodes;