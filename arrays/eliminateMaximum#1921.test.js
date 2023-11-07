import eliminateMaximum from "./eliminateMaximum#1921";

describe('eliminateMaximum test cases', () => {
    it('should return the correct result for the first example', () => {
        const result = eliminateMaximum([1, 3, 4], [1, 1, 1]);
        expect(result).toBe(3);
    });

    it('should return the correct result for the second example', () => {
        const result = eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1]);
        expect(result).toBe(1);
    });

    it('should return the correct result for the third example', () => {
        const result = eliminateMaximum([3, 2, 4], [5, 3, 2]);
        expect(result).toBe(1);
    });

    it('should handle an empty input array', () => {
        const result = eliminateMaximum([], []);
        expect(result).toBe(0);
    });
});