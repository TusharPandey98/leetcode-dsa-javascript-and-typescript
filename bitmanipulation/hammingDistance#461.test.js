import hammingDistance from "./hammingDistance#461";
describe('hammingDistance', () => {
    it('should return 0 when x and y are equal', () => {
        expect(hammingDistance(5, 5)).toBe(0);
    });

    it('should return 2 for x = 1 and y = 4', () => {
        expect(hammingDistance(1, 4)).toBe(2);
    });

    it('should return 1 for x = 3 and y = 1', () => {
        expect(hammingDistance(3, 1)).toBe(1);
    });

    it('should return 3 for x = 7 and y = 0', () => {
        expect(hammingDistance(7, 0)).toBe(3);
    });

    it('should return 2 for x = 8 and y = 12', () => {
        expect(hammingDistance(8, 12)).toBe(1);
    });

    it('should return 31 for x = 2147483647 and y = 0', () => {
        expect(hammingDistance(2147483647, 0)).toBe(31);
    });
});
