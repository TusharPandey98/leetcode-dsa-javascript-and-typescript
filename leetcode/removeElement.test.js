import removeElement from "./removeElement";
describe('Remove Element test cases', () => {
    it("removes element from the array", () => {
        const nums = [3,2,2,3];
        const expectedNums = [2,2];
        const k = removeElement(nums,3);
        expect(k).toBe(expectedNums.length);
        nums.sort()
        for (let i = 0; i < k; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }
    });
    it("removes element from the array", () => {
        const nums = [0,1,2,2,3,0,4,2];
        const expectedNums = [0,0,1,3,4];
        const k = removeElement(nums,2);
        expect(k).toBe(expectedNums.length);
        nums.sort();
        for (let i = 0; i < k; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }
    });
    it("returns 0 for an empty array", () => {
        const nums = [];
        const k = removeElement(nums,2);
        expect(k).toBe(0);
    });
});