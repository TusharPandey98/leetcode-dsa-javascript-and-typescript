import dailyTemperatures from "./dailyTemperatures#739";

describe('dailyTemperatures function', () => {
    it('returns the correct result for a simple case', () => {
        const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
        const result = dailyTemperatures(temperatures);
        expect(result).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    });

    it('returns an array of non zeros for increasing temperatures', () => {
        const temperatures = [1, 2, 3, 4, 5];
        const result = dailyTemperatures(temperatures);
        expect(result).toEqual([1, 1, 1, 1, 0]);
    });

    it('returns an array of zeros for decreasing temperatures', () => {
        const temperatures = [5, 4, 3, 2, 1];
        const result = dailyTemperatures(temperatures);
        expect(result).toEqual([0, 0, 0, 0, 0]);
    });

    it('handles an empty array', () => {
        const temperatures = [];
        const result = dailyTemperatures(temperatures);
        expect(result).toEqual([]);
    });

    it('handles temperatures with repeated values', () => {
        const temperatures = [73, 74, 73, 75, 71, 69, 72, 76, 73];
        const result = dailyTemperatures(temperatures);
        expect(result).toEqual([1, 2, 1, 4, 2, 1, 1, 0, 0]);
    });

    // Add more test cases as needed
});
