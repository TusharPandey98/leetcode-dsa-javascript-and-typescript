import reverseString from "./reverseString#344";

describe('reverseString', () => {
    it('should reverse a non-empty array of characters', () => {
        const input1 = ['h', 'e', 'l', 'l', 'o'];
        const expected1 = ['o', 'l', 'l', 'e', 'h'];
        reverseString(input1);
        expect(input1).toEqual(expected1);

        const input2 = ['w', 'o', 'r', 'l', 'd'];
        const expected2 = ['d', 'l', 'r', 'o', 'w'];
        reverseString(input2);
        expect(input2).toEqual(expected2);
    });

    it('should not modify the array when input is empty', () => {
        const input = [];
        reverseString(input);
        expect(input).toEqual([]);
    });
});
