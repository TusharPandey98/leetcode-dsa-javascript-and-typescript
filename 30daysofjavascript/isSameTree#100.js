/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function (p, q) {
//     if (!p && !q) return true;
//     if (!p || !q || p.val !== q.val) return false;
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

// const isSameTree = (p, q) => {
//     const pStack = [], qStack = [];
//     while (p || q || pStack.length || qStack.length) {
//         while (p) {
//             pStack.push(p);
//             p = p.left;
//         }
//         while (q) {
//             qStack.push(q);
//             q = q.left;
//         }

//         p = pStack.pop();
//         q = qStack.pop();

//         if (!p && !q) {
//             continue;
//         }
//         if (!p || !q || p.val !== q.val) {
//             return false;
//         }
//         pStack.push(null);
//         qStack.push(null);
//         p = p.right;
//         q = q.right;
//     }
//     return true;

// }

const isSameTree = (p, q) => {
    const stack = [];
    stack.push(p);
    stack.push(q);

    while (stack.length) {
        const nodeOne = stack.pop();
        const nodeTwo = stack.pop();

        if (!nodeOne && !nodeTwo) {
            continue;
        }

        if (!nodeOne || !nodeTwo || nodeOne.val !== nodeTwo.val) {
            return false;
        }
        stack.push(nodeOne.left);
        stack.push(nodeTwo.left);
        stack.push(nodeOne.right);
        stack.push(nodeTwo.right);
    }
    return true;
}
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);
let q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

isSameTree(p, q);