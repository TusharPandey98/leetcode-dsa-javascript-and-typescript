import climbStairs from "./climbStairs";

describe('Climbing Stairs', () => {
  test('Number of steps = 0', () => {
    expect(climbStairs(0)).toBe(1);
  });

  test('Number of steps = 1', () => {
    expect(climbStairs(1)).toBe(1);
  });

  test('Number of steps = 2', () => {
    expect(climbStairs(2)).toBe(2);
  });

  test('Number of steps = 3', () => {
    expect(climbStairs(3)).toBe(3);
  });

  test('Number of steps = 4', () => {
    expect(climbStairs(4)).toBe(5);
  });

  test('Number of steps = 5', () => {
    expect(climbStairs(5)).toBe(8);
  });
});