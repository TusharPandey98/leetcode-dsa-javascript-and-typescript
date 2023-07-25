//  Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const createBinaryTree = (arr) => {
    if (arr.length === 0) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];

    for (let i = 1; i < arr.length; i += 2) {
        const node = queue.shift();

        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }

        if (i + 1 < arr.length && arr[i + 1] !== null) {
            node.right = new TreeNode(arr[i + 1]);
            queue.push(node.right);
        }
    }

    return root;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/**Recursive Approach */
var inorderTraversal = function (root) {
    const outputArr = [];
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        outputArr.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    return outputArr;
};

/**Iterative Approach */
// const inorderTraversal = (root) => {
//     const outputArr = [], stack = [];
//     let current = root;

//     while (current || stack.length !== 0) {
//         if (current) {
//             stack.push(current);
//             current = current.left;
//         } else {
//             current = stack.pop();
//             outputArr.push(current.val);
//             current = current.right;
//         }
//     }
//     return outputArr;
// }

export  { inorderTraversal, createBinaryTree };
