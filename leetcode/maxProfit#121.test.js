import maxProfit from "./maxProfit#121";

describe('maxProfit', () => {
  it('returns the maximum profit when prices are increasing', () => {
    expect(maxProfit([1, 3, 6, 9, 15, 20])).toBe(19);
  });

  it('returns 0 when prices are decreasing', () => {
    expect(maxProfit([20, 15, 9, 6, 3, 1])).toBe(0);
  });

  it('returns 0 when prices are constant', () => {
    expect(maxProfit([5, 5, 5, 5, 5])).toBe(0);
  });

  it('returns the maximum profit when prices are alternating', () => {
    expect(maxProfit([5, 10, 4, 15, 2])).toBe(11);
  });

  it('returns 0 for an empty input array', () => {
    expect(maxProfit([])).toBe(0);
  });

  it('returns the maximum profit when prices are negative', () => {
    expect(maxProfit([10, -2, 5, 3, -7])).toBe(7);
  });

  it('returns 0 for a single day', () => {
    expect(maxProfit([10])).toBe(0);
  });

  it('returns the maximum profit for a large input array', () => {
    expect(maxProfit([100, 120, 90, 130, 150, 80, 200, 110, 160])).toBe(120);
  });

  it('returns 0 when prices are all zero', () => {
    expect(maxProfit([0, 0, 0, 0, 0])).toBe(0);
  });
});
