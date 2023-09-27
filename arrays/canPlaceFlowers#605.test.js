import canPlaceFlowers from "./canPlaceFlowers#605";

describe('canPlaceFlowers', () => {
    it('should return true when there are enough empty plots to plant flowers', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
        expect(canPlaceFlowers([0, 0, 0, 0, 0], 3)).toBe(true);
        expect(canPlaceFlowers([0, 0, 0, 0, 1], 2)).toBe(true);
        expect(canPlaceFlowers([1, 0, 0, 0, 0, 0, 0, 1], 3)).toBe(false);
    });

    it('should return false when there are not enough empty plots to plant flowers', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 3)).toBe(false);
        expect(canPlaceFlowers([1, 1, 1, 1, 1], 1)).toBe(false);
        expect(canPlaceFlowers([0, 1, 0, 1, 0], 2)).toBe(false);
    });

    it('should return true when n is 0 (no flowers to plant)', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 0)).toBe(true);
        expect(canPlaceFlowers([], 0)).toBe(true);
    });

    it('should return false for an empty flowerbed when n is greater than 0', () => {
        expect(canPlaceFlowers([], 1)).toBe(false);
    });

    it('should handle edge cases with single plots', () => {
        expect(canPlaceFlowers([0], 1)).toBe(true);
        expect(canPlaceFlowers([1], 0)).toBe(true);
        expect(canPlaceFlowers([1], 1)).toBe(false);
    });
});
