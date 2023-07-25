import {inorderTraversal,createBinaryTree} from "./inorderTraversal#94";

describe('InorderTraversal Test cases', () => { 
    test('In-order traversal for a balanced binary tree', () => {
        const arr = [4, 2, 6, 1, 3, 5, 7];
        const root = createBinaryTree(arr);
        expect(inorderTraversal(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
      });
      
      test('In-order traversal for an unbalanced binary tree', () => {
        const arr = [1, null, 2, null, null, 3];
        const root = createBinaryTree(arr);
        expect(inorderTraversal(root)).toEqual([1, 2, 3]);
      });
      
      test('In-order traversal for an empty binary tree', () => {
        const root = null;
        expect(inorderTraversal(root)).toEqual([]);
      });
 })