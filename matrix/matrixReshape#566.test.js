import matrixReshape from "./matrixReshape#566";
describe('matrixReshape', () => {
    it('should return the original matrix when reshape is not possible', () => {
        const mat = [[1, 2], [3, 4]];
        const r = 3;
        const c = 2;
        const result = matrixReshape(mat, r, c);
        expect(result).toEqual(mat);
    });

    it('should return the reshaped matrix when reshape is possible', () => {
        const mat = [[1, 2], [3, 4]];
        const r = 1;
        const c = 4;
        const expected = [[1, 2, 3, 4]];
        const result = matrixReshape(mat, r, c);
        expect(result).toEqual(expected);
    });

    it('should return the reshaped matrix for another valid reshape', () => {
        const mat = [[1, 2], [3, 4]];
        const r = 2;
        const c = 4;
        const expected = [[1, 2], [3, 4]];
        const result = matrixReshape(mat, r, c);
        expect(result).toEqual(expected);
    });

    it('should handle a single element matrix', () => {
        const mat = [[5]];
        const r = 1;
        const c = 1;
        const expected = [[5]];
        const result = matrixReshape(mat, r, c);
        expect(result).toEqual(expected);
    });

    it('should handle a large matrix', () => {
        const mat = [[1, 2], [3, 4], [5, 6], [7, 8]];
        const r = 4;
        const c = 2;
        const expected = [[1, 2], [3, 4], [5, 6], [7, 8]];
        const result = matrixReshape(mat, r, c);
        expect(result).toEqual(expected);
    });
});
