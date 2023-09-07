import findDisappearedNumbers from "./findDisappearedNumbers#448";


describe('findDisappearedNumbers', () => {
    it('should return an empty array for an empty input', () => {
        expect(findDisappearedNumbers([])).toEqual([]);
    });

    it('should return [5, 6] for input [4, 3, 2, 7, 8, 2, 1]', () => {
        expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 1])).toEqual([5, 6]);
    });

    it('should return [2, 3] for input [1, 1, 1, 4]', () => {
        expect(findDisappearedNumbers([1, 1, 1, 4])).toEqual([2, 3]);
    });

    it('should return [1] for input [2, 2]', () => {
        expect(findDisappearedNumbers([2, 2])).toEqual([1]);
    });

    it('should return [1, 2, 3, 4, 5, 6, 7, 8] for input [9, 10, 11, 12, 13, 14, 15, 16]', () => {
        expect(findDisappearedNumbers([9, 10, 11, 12, 13, 14, 15, 16])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should return [1] for input [1]', () => {
        expect(findDisappearedNumbers([1])).toEqual([]);
    });

    it('should return [2] for input [1, 3]', () => {
        expect(findDisappearedNumbers([1, 3])).toEqual([2]);
    });

    it('should return [3] for input [1, 2, 2]', () => {
        expect(findDisappearedNumbers([1, 2, 2])).toEqual([3]);
    });
});
