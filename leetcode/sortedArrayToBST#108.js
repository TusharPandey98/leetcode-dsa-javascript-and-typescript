/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
/**Itreativ BFS method */
// const sortedArrayToBST = function (nums) {
//     if (nums.length === 0) return null;
//     const queue = [[null, 0, nums.length - 1]];
//     let root = null;
//     while (queue.length > 0) {
//         const [parent, start, end] = queue.pop();
//         const mid = Math.ceil((start + end) / 2);
//         const node = new TreeNode(nums[mid]);
//         if (!root) {
//             root = node;
//         }

//         if (parent) {
//             if (node.val < parent.val) {
//                 parent.left = node;
//             } else {
//                 parent.right = node;
//             }
//         }

//         if (start < mid) {
//             queue.push([node, start, mid - 1])
//         }
//         if (end > mid) {
//             queue.push([node, mid + 1, end])
//         }
//     }
//     return root;
// }

// /**Recursive DFS method with slice*/
// const sortedArrayToBST = (nums) =>{
//     if(!nums.length) return null;
//     let mid = Math.floor(nums.length/2);
//     let root  = new TreeNode(nums[mid]);
//     root.left = sortedArrayToBST(nums.slice(0,mid))
//     root.right = sortedArrayToBST(nums.slice(mid+1))
//     return root;
// }
/**Recursive DFS without slice */
const sortedArrayToBST = (nums) => {
    const createBST = (start, end) => {
        if (start > end) {
            return null;
        }
        let mid = Math.floor((start + end) / 2);
        const root = new TreeNode(nums[mid]);

        root.left = createBST(start, mid - 1);
        root.right = createBST(mid + 1, end);
        return root;
    }

    return createBST(0, nums.length - 1);

}

function sortedArrayToBST(nums) {
    const memo = new Map();
  
    function buildBST(start, end) {
      if (start > end) {
        return null;
      }
  
      const key = `${start}-${end}`;
      if (memo.has(key)) {
        return memo.get(key);
      }
  
      const mid = Math.floor((start + end) / 2);
      const root = new TreeNode(nums[mid]);
      root.left = buildBST(start, mid - 1);
      root.right = buildBST(mid + 1, end);
  
      memo.set(key, root);
      return root;
    }
  
    return buildBST(0, nums.length - 1);
  }
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));