import summaryRanges from "./summaryRanges#228";

describe('summaryRanges', () => {
    it('should summarize ranges correctly', () => {
        const nums = [0, 1, 2, 4, 5, 7];
        const expected = ['0->2', '4->5', '7'];

        const result = summaryRanges(nums);

        expect(result).toEqual(expected);
    });

    it('should handle single numbers correctly', () => {
        const nums = [1, 3, 5, 7];
        const expected = ['1', '3', '5', '7'];

        const result = summaryRanges(nums);

        expect(result).toEqual(expected);
    });

    it('should handle empty input array correctly', () => {
        const nums = [];
        const expected = [];

        const result = summaryRanges(nums);

        expect(result).toEqual(expected);
    });
});
