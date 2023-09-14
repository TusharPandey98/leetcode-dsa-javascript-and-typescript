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
// const findMode = (root) => {
//     if (!root) return [];

//     const frequencyMap = new Map();
//     let maxFrequency = 0;


//     const traverse = (node) => {
//         if (!node) return;

//         traverse(node.left);

//         const val = node.val || 0;
//         frequencyMap.set(val, (frequencyMap.get(val) || 0) + 1);
//         maxFrequency = Math.max(maxFrequency, frequencyMap.get(val));

//         traverse(node.right);

//     }

//     traverse(root);

//     const result = [];
//     frequencyMap.forEach((value, key) => {
//         if (value === maxFrequency) result.push(key);
//     })

//     return result;
// };

//Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

const findMode = (root) => {
    let currentVal = null;
    let currentCount = 0;
    let maxCount = 0;
    const modes = [];

    const inorderTraversal = (node) => {
        if (!node) {
            return;
        }

        inorderTraversal(node.left);

        // Update the current value and count
        if (node.val === currentVal) {
            currentCount++;
        } else {
            currentVal = node.val;
            currentCount = 1;
        }

        // Update the max count and modes array
        if (currentCount > maxCount) {
            maxCount = currentCount;
            modes.length = 0;
            modes.push(currentVal);
        } else if (currentCount === maxCount) {
            modes.push(currentVal);
        }

        inorderTraversal(node.right);
    };

    inorderTraversal(root);
    return modes;
};

// class TreeNode {
//     constructor(val, left, right) {
//         this.val = (val === undefined ? 0 : val);
//         this.left = (left === undefined ? null : left);
//         this.right = (right === undefined ? null : right);
//     }
// }

// const root = new TreeNode(1)
// root.right = new TreeNode(2);
// root.right.left = new TreeNode(2);

// const root = new TreeNode(1)
// root.right = new TreeNode(2)


// console.log(findMode(root));

export default findMode

