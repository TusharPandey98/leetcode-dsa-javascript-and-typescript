import selfDividingNumbers from "./selfDividingNumbers#728";

describe('selfDividingNumbers', () => {
    it('should return [1] for left = 1 and right = 1', () => {
        expect(selfDividingNumbers(1, 1)).toEqual([1]);
    });

    it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9] for left = 1 and right = 10', () => {
        expect(selfDividingNumbers(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should return [22] for left = 20 and right = 25', () => {
        expect(selfDividingNumbers(20, 25)).toEqual([22,24]);
    });

    it('should return [55] for left = 50 and right = 55', () => {
        expect(selfDividingNumbers(50, 55)).toEqual([55]);
    });

    it('should return [] for left = 200 and right = 205', () => {
        expect(selfDividingNumbers(200, 205)).toEqual([]);
    });
});

