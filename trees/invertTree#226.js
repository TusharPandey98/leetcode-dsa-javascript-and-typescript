/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// const invertTree = (root) => {
//     if (!root) return root;

//     if(root.left) invertTree(root.left);
//     if(root.right) invertTree(root.right)

//     console.log(root.val);
// return root;
// }

//using stack
// const invertTree = (root) => {
//     if (!root) return root;
//     let stack = [root];

//     while (stack.length) {
//         let currentNode = stack.pop(), leftNode = currentNode.left, rightNode = currentNode.right;
//         if (currentNode.right) stack.push(currentNode.right);
//         if (currentNode.left) stack.push(currentNode.left);
//         currentNode.left = rightNode;
//         currentNode.right = leftNode;
//     }
//     return root;
// }


//using array destructureing
// const invertTree = (root) => {
//     if (!root) return root;

//     const stack = [root];
//     while (stack.length) {
//         const currentNode = stack.pop();
//         if (currentNode) {
//             [currentNode.left, currentNode.right] = [currentNode.right, currentNode.left];
//             stack.push(currentNode.left, currentNode.right);
//         }
//     }
    
//     return root;
// };


//using recursion 
const invertTree = (root) => {
    if (!root) return null;

    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
};


// function TreeNode(val = 0, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
// }

// let root = new TreeNode(4);
// root.left = new TreeNode(2);
// root.right = new TreeNode(7)
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(3);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(9);

// console.log(invertTree(root));

export default invertTree;