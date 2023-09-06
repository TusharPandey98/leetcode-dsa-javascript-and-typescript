import thirdMax from "./thirdMax#414";
describe('thirdMax', () => {
    it('should return undefined when given an empty array', () => {
        expect(thirdMax([])).toBeUndefined();
    });

    it('should return the third maximum distinct value for an array with three or more distinct values', () => {
        expect(thirdMax([3, 2, 1])).toBe(1);
        expect(thirdMax([1, 2, 2, 3])).toBe(1);
        expect(thirdMax([1, 2, 3, 4, 5])).toBe(3);
        expect(thirdMax([5, 4, 3, 2, 1])).toBe(3);
    });

    it('should return the maximum value when there are fewer than three distinct values', () => {
        expect(thirdMax([1])).toBe(1);
        expect(thirdMax([1, 1, 1])).toBe(1);
        expect(thirdMax([2, 2, 3, 3])).toBe(3);
    });
});
