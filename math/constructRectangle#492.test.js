import constructRectangle from "./constructRectangle#492";

// Test cases
describe('constructRectangle', () => {
    it('should return [2, 2] for area 4', () => {
        const area = 4;
        const result = constructRectangle(area);
        expect(result).toEqual([2, 2]);
    });

    it('should return [37, 1] for area 37', () => {
        const area = 37;
        const result = constructRectangle(area);
        expect(result).toEqual([37, 1]);
    });

    it('should return [427, 286] for area 122122', () => {
        const area = 122122;
        const result = constructRectangle(area);
        expect(result).toEqual([427, 286]);
    });

    // Add more test cases for edge cases and other scenarios as needed
});
