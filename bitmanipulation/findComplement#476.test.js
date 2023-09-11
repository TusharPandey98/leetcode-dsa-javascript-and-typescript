import findComplement from "./findComplement#476";

describe('Solution', () => {
    it('should return the complement of 5 as 2', () => {
        const num = 5;
        const expectedResult = 2;
        const result = findComplement(num);
        expect(result).toBe(expectedResult);
    });

    it('should return the complement of 1 as 0', () => {
        const num = 1;
        const expectedResult = 0;
        const result = findComplement(num);
        expect(result).toBe(expectedResult);
    });

    // Add more test cases as needed
});
