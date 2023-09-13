import findPoisonedDuration from "./findPoisonedDuration#495";
// Test cases
describe('findPoisonedDuration', () => {
    it('should return 4 for [1, 2], duration 2', () => {
        const timeSeries = [1, 2];
        const duration = 2;
        const result = findPoisonedDuration(timeSeries, duration);
        expect(result).toBe(3);
    });

    it('should return 3 for [1, 4], duration 2', () => {
        const timeSeries = [1, 4];
        const duration = 2;
        const result = findPoisonedDuration(timeSeries, duration);
        expect(result).toBe(4);
    });

    it('should return 5 for [1, 2, 3, 4, 5], duration 2', () => {
        const timeSeries = [1, 2, 3, 4, 5];
        const duration = 2;
        const result = findPoisonedDuration(timeSeries, duration);
        expect(result).toBe(6);
    });

    it('should return 0 for an empty timeSeries', () => {
        const timeSeries = [];
        const duration = 2;
        const result = findPoisonedDuration(timeSeries, duration);
        expect(result).toBe(0);
    });

    // Add more test cases for edge cases and other scenarios as needed
});
