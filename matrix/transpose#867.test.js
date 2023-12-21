import transpose from "./transpose#867";

describe('transpose function', () => {
    it('transposes a 2x2 matrix', () => {
        const input = [[1, 2], [3, 4]];
        const expectedOutput = [[1, 3], [2, 4]];
        expect(transpose(input)).toEqual(expectedOutput);
    });

    it('transposes a 3x2 matrix', () => {
        const input = [[1, 2], [3, 4], [5, 6]];
        const expectedOutput = [[1, 3, 5], [2, 4, 6]];
        expect(transpose(input)).toEqual(expectedOutput);
    });

    it('transposes a 2x3 matrix', () => {
        const input = [[1, 2, 3], [4, 5, 6]];
        const expectedOutput = [[1, 4], [2, 5], [3, 6]];
        expect(transpose(input)).toEqual(expectedOutput);
    });
})