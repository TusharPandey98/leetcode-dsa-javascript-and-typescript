import getRow from "./pascalTriangle#119";

describe('getRow', () => {
    test('Get row with rowIndex = 0', () => {
        expect(getRow(0)).toEqual([1]);
    });

    test('Get row with rowIndex = 1', () => {
        expect(getRow(1)).toEqual([1, 1]);
    });

    test('Get row with rowIndex = 5', () => {
        expect(getRow(5)).toEqual([1, 5, 10, 10, 5, 1]);
    });

    test('Get row with rowIndex = 10', () => {
        expect(getRow(10)).toEqual([1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]);
    });

    test('Get row with rowIndex = 20', () => {
        expect(getRow(20)).toEqual([1, 20, 190, 1140, 4845, 15504, 38760, 77520, 125970, 167960, 184756, 167960, 125970, 77520, 38760, 15504, 4845, 1140, 190, 20, 1]);
    });

    test('Get row with negative rowIndex', () => {
        expect(getRow(-1)).toEqual([]);
    });
});
