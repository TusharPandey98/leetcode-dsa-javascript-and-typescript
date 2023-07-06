import removeDuplicates from "./removeDuplicates"

describe('Remove Duplicates test cases', () => {
    it("removes duplicates from the array", () => {
        const nums = [1, 1, 2, 3, 3, 4, 5, 5, 5];
        const expectedNums = [1, 2, 3, 4, 5];
        const k = removeDuplicates(nums);
        expect(k).toBe(expectedNums.length);
        for (let i = 0; i < k; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }
    });

    it("returns 0 for an empty array", () => {
        const nums = [];
        const k = removeDuplicates(nums);
        expect(k).toBe(0);
    });
    it("keeps the array unchanged when no duplicates are present", () => {
        const nums = [1, 2, 3, 4, 5];
        const expectedNums = [1, 2, 3, 4, 5];
        const k = removeDuplicates(nums);
        expect(k).toBe(expectedNums.length);
        for (let i = 0; i < k; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }
    });
    test('[1,1,2,3,3] to be equal [1,2,3]', () => {
        const nums = [1, 1, 2, 3, 3];
        const expectedNums = [1, 2, 3];
        const k = removeDuplicates(nums);
        expect(k).toBe(expectedNums.length);
        for (let i = 0; i < k; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }
    })
    test('[0,0,1,1,1,2,2,3,3,4] to be equal [0,1,2,3,4]', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const expectedNums = [0, 1, 2, 3, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(expectedNums.length);
        for (let i = 0; i < k; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }
    })
})