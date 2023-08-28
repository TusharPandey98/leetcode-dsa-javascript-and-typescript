import moveZeroes from "./moveZeroes#283";
describe('moveZeroes', () => {
    it('moves zeroes to the end while maintaining the relative order of non-zero elements', () => {
        const nums1 = [0, 1, 0, 3, 12];
        moveZeroes(nums1);
        expect(nums1).toEqual([1, 3, 12, 0, 0]);

        const nums2 = [0, 0, 0, 1, 2];
        moveZeroes(nums2);
        expect(nums2).toEqual([1, 2, 0, 0, 0]);

        const nums3 = [1, 2, 3, 4, 0];
        moveZeroes(nums3);
        expect(nums3).toEqual([1, 2, 3, 4, 0]);

        const nums4 = [0, 0, 0, 0, 0];
        moveZeroes(nums4);
        expect(nums4).toEqual([0, 0, 0, 0, 0]);
    });

    it('handles arrays of different lengths', () => {
        const nums1 = [];
        moveZeroes(nums1);
        expect(nums1).toEqual([]);

        const nums2 = [1];
        moveZeroes(nums2);
        expect(nums2).toEqual([1]);

        const nums3 = [0, 0, 0, 0];
        moveZeroes(nums3);
        expect(nums3).toEqual([0, 0, 0, 0]);
    });
});
