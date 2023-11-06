import getWinner from "./getWinner#1535";
describe('getWinner test cases', () => {
    it('should return the correct winner with k = 2', () => {
        expect(getWinner([1, 25, 35, 42, 68, 70], 2)).toBe(70);
    });

    it('should return the correct winner with k = 3', () => {
        expect(getWinner([1, 25, 35, 42, 68, 70], 3)).toBe(70);
    });

    it('should return the correct winner when k is larger than the array length', () => {
        expect(getWinner([10, 20, 30, 40, 50], 6)).toBe(50);
    });

    it('should return 70', () => {
        expect(getWinner([1, 25, 35, 42, 68, 70], 2)).toBe(70);
    });
});
