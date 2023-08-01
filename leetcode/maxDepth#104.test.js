import maxDepth from "./maxDepth#104";
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// Helper function to create a binary tree from an array
function createBinaryTree(arr) {
  if (arr.length === 0) return null;
  const nodes = arr.map(val => (val === null ? null : new TreeNode(val)));
  const len = nodes.length;
  for (let i = 0; i < len; i++) {
    if (nodes[i] !== null) {
      const leftIndex = 2 * i + 1;
      const rightIndex = 2 * i + 2;
      nodes[i].left = leftIndex < len ? nodes[leftIndex] : null;
      nodes[i].right = rightIndex < len ? nodes[rightIndex] : null;
    }
  }
  return nodes[0];
}

describe('maxDepth', () => {
  test('Empty tree should return 0', () => {
    expect(maxDepth(null)).toBe(0);
  });

  test('Single node tree should return 1', () => {
    const root = new TreeNode(5);
    expect(maxDepth(root)).toBe(1);
  });

  test('Binary tree with only left child should return correct depth', () => {
    const root = createBinaryTree([3, 9, null, null, null]);
    expect(maxDepth(root)).toBe(2);
  });

  test('Binary tree with only right child should return correct depth', () => {
    const root = createBinaryTree([3, null, 20, null, null]);
    expect(maxDepth(root)).toBe(2);
  });

  test('Binary tree with both left and right children should return correct depth', () => {
    const root = createBinaryTree([3, 9, 20, null, null, 15, 7]);
    expect(maxDepth(root)).toBe(3);
  });

  test('Binary tree with uneven depth should return correct depth', () => {
    const root = createBinaryTree([3, 9, 20, null, null, 15, null, null, null, 7]);
    expect(maxDepth(root)).toBe(3);
  });
});
