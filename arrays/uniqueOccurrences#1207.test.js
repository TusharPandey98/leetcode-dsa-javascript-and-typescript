import uniqueOccurrences from "./uniqueOccurrences#1207";

describe('uniqueOccurrences', () => {
    it('returns false for array with unique occurrences', () => {
        const result = uniqueOccurrences([1, 2, 3, 4, 5]);
        expect(result).toBe(false);
    });

    it('returns true for array with non-unique occurrences', () => {
        const result = uniqueOccurrences([1, 2, 2, 3, 3, 3]);
        expect(result).toBe(true);
    });

    it('returns true for array with a single element', () => {
        const result = uniqueOccurrences([7]);
        expect(result).toBe(true);
    });

    it('returns false for array with repeated elements but unique occurrences', () => {
        const result = uniqueOccurrences([4, 5, 6, 4, 5, 6, 4, 5, 6]);
        expect(result).toBe(false);
    });

    it('returns false for array with negative and positive numbers having the same occurrences', () => {
        const result = uniqueOccurrences([-1, 2, -1, 3, 2, 4, -1, 4]);
        expect(result).toBe(false);
    });
});
