import buildArray from "./buildArray#1441";
describe("buildArray test cases", () => {
  it("test case 1", () => {
    expect(buildArray([1, 3], 3)).toEqual(["Push", "Push", "Pop", "Push"]);
  });
  it("test case 2", () => {
    expect(buildArray([1, 2, 3], 3)).toEqual(["Push", "Push", "Push"]);
  });
  it("test case 3", () => {
    expect(buildArray([1, 2], 4)).toEqual(["Push", "Push"]);
  });
});
