import nextGreaterElement from "./nextGreaterElement#496";
describe('nextGreaterElement', () => {
    it('should return [-1, 3, -1] for nums1=[4, 1, 2] and nums2=[1, 3, 4, 2]', () => {
        const nums1 = [4, 1, 2];
        const nums2 = [1, 3, 4, 2];
        const result = nextGreaterElement(nums1, nums2);
        expect(result).toEqual([-1, 3, -1]);
    });

    it('should return [3, -1] for nums1=[2, 4] and nums2=[1, 2, 3, 4]', () => {
        const nums1 = [2, 4];
        const nums2 = [1, 2, 3, 4];
        const result = nextGreaterElement(nums1, nums2);
        expect(result).toEqual([3, -1]);
    });

    it('should return [-1, 2, 3, 4] for nums1=[5, 1, 2, 3] and nums2=[1, 2, 3, 4, 5]', () => {
        const nums1 = [5, 1, 2, 3];
        const nums2 = [1, 2, 3, 4, 5];
        const result = nextGreaterElement(nums1, nums2);
        expect(result).toEqual([-1, 2, 3, 4]);
    });

    it('should return [-1] for nums1=[7] and nums2=[7]', () => {
        const nums1 = [7];
        const nums2 = [7];
        const result = nextGreaterElement(nums1, nums2);
        expect(result).toEqual([-1]);
    });

    it('should return [] for empty nums1 and nums2', () => {
        const nums1 = [];
        const nums2 = [];
        const result = nextGreaterElement(nums1, nums2);
        expect(result).toEqual([]);
    });
});
