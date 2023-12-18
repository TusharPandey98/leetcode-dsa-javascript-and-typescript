import maxProductDifference from "./maxProductDifference#1913";

describe('maxProductDifference test cases', () => {
    it('[5,6,2,7,4] will return 34', () => {
        expect(maxProductDifference([5, 6, 2, 7, 4])).toBe(34);
    })
    it('[4, 2, 5, 9, 7, 4, 8] will return 64', () => {
        expect(maxProductDifference([4, 2, 5, 9, 7, 4, 8])).toBe(64);
    })
})