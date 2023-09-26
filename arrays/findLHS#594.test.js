import findLHS from "./findLHS#594";

describe('findLHS', () => {
    it('should return 5 for input [1, 3, 2, 2, 5, 2, 3, 7]', () => {
        const nums = [1, 3, 2, 2, 5, 2, 3, 7];
        expect(findLHS(nums)).toBe(5);
    });

    it('should return 2 for input [1, 2, 3, 4]', () => {
        const nums = [1, 2, 3, 4];
        expect(findLHS(nums)).toBe(2);
    });

    it('should return 0 for input [1, 1, 1, 1]', () => {
        const nums = [1, 1, 1, 1];
        expect(findLHS(nums)).toBe(0);
    });

    it('should return 4 for input [1, 1, 2, 2, 3, 3, 4, 5]', () => {
        const nums = [1, 1, 2, 2, 3, 3, 4, 5];
        expect(findLHS(nums)).toBe(4);
    });

    it('should return 0 for input [1]', () => {
        const nums = [1];
        expect(findLHS(nums)).toBe(0);
    });

    it('should return 6 for input [1, 1, 1, 2, 2, 3, 3, 4, 4]', () => {
        const nums = [1, 1, 1, 2, 2, 3, 3, 4, 4];
        expect(findLHS(nums)).toBe(5);
    });

    it('should return 0 for an empty input array', () => {
        const nums = [];
        expect(findLHS(nums)).toBe(0);
    });
});
