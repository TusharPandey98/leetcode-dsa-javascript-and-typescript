import findErrorNums from "./findErrorNums#645";


describe('findErrorNums', () => {
    it('should find the duplicate and missing numbers in the array', () => {
        // Test case 1: Example case
        expect(findErrorNums([1, 2, 2, 4])).toEqual([2, 3]);

        // Test case 2: All numbers are in order with one missing
        expect(findErrorNums([1, 2, 3, 4, 4])).toEqual([4, 5]);

        // Test case 3: All numbers are in reverse order with one duplicate
        expect(findErrorNums([4, 3, 3, 2, 1])).toEqual([3, 5]);

        expect(findErrorNums([1,1])).toEqual([1, 2]);

        // Test case 5: Edge case with one element
        expect(findErrorNums([1])).toEqual([-1, -1]);

        // Test case 6: Edge case with two elements
        expect(findErrorNums([3, 2, 2])).toEqual([2, 1]);
    });
});
