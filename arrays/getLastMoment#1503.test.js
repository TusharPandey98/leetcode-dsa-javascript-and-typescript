import getLastMoment from "./getLastMoment#1503";
describe("getLastMoment Test cases", () => {
  it("test case 1", () => {
    expect(getLastMoment(4, [4, 3], [0, 1])).toBe(4);
  });
  it("test case 2", () => {
    expect(getLastMoment(7, [], [0, 1, 2, 3, 4, 5, 6, 7])).toBe(7);
  });
  it("test case 1", () => {
    expect(getLastMoment(7, [0, 1, 2, 3, 4, 5, 6, 7], [])).toBe(7);
  });
});
