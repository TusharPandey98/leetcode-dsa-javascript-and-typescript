import groupThePeople from "./groupThePeople#1282";

describe('groupThePeople', () => {
    it('should group people correctly for various group sizes', () => {
        const groupSizes1 = [3, 3, 3, 3, 3, 1, 3];
        const expectedResult1 = expect.arrayContaining([[0, 1, 2], [3, 4, 6], [5]]);
        const result1 = groupThePeople(groupSizes1);
        expect(result1).toEqual(expectedResult1);

        const groupSizes2 = [2, 1, 3, 3, 3, 2];
        const expectedResult2 = expect.arrayContaining([[1], [0, 5], [2,3, 4]]);
        const result2 = groupThePeople(groupSizes2);
        expect(result2).toEqual(expectedResult2);

        // Add more test cases as needed
    });
});

