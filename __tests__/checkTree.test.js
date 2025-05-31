import { checkTree, TreeNode } from '../code/checkTree.js';

test('returns true when root value equals sum of children', () => {
  const root = new TreeNode(10, new TreeNode(4), new TreeNode(6));
  expect(checkTree(root)).toBe(true);
});

test('returns false when root value does not equal sum of children', () => {
  const root = new TreeNode(10, new TreeNode(3), new TreeNode(6));
  expect(checkTree(root)).toBe(false);
});

test('returns true when all values are zero', () => {
  const root = new TreeNode(0, new TreeNode(0), new TreeNode(0));
  expect(checkTree(root)).toBe(true);
});

test('returns true for negative numbers that sum correctly', () => {
  const root = new TreeNode(-10, new TreeNode(-5), new TreeNode(-5));
  expect(checkTree(root)).toBe(true);
});

test('returns false if only one child is correct', () => {
  const root = new TreeNode(8, new TreeNode(8), new TreeNode(1));
  expect(checkTree(root)).toBe(false);
});
