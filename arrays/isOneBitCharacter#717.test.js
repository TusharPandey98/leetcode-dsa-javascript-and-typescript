import isOneBitCharacter from "./isOneBitCharacter#717";

describe('isOneBitCharacter', () => {
    it('should return true for [1, 0, 0]', () => {
        expect(isOneBitCharacter([1, 0, 0])).toBe(true);
    });

    it('should return false for [1, 1, 1, 0]', () => {
        expect(isOneBitCharacter([1, 1, 1, 0])).toBe(false);
    });

    it('should return true for [0, 0, 0]', () => {
        expect(isOneBitCharacter([0, 0, 0])).toBe(true);
    });

    it('should return false for [1, 0, 1, 0]', () => {
        expect(isOneBitCharacter([1, 0, 1, 0])).toBe(false);
    });

    it('should return true for [1, 1, 0, 0, 0]', () => {
        expect(isOneBitCharacter([1, 1, 0, 0, 0])).toBe(true);
    });

    it('should return true for [1, 1, 0, 0, 1]', () => {
        expect(isOneBitCharacter([1, 1, 0, 0, 1])).toBe(true);
    });
});
