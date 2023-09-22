import reverseWords from "./reverseWords#557";

describe('reverseWords function', () => {
    it('should reverse the words in a sentence', () => {
        expect(reverseWords('Hello world')).toBe('olleH dlrow');
    });

    it('should return "s\'teL ekat edoCteeL tsetnoc"', () => {
        expect(reverseWords("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
    });

    it('should handle a single word', () => {
        expect(reverseWords('Test')).toBe('tseT');
    });

    it('should reverse a word', () => {
        expect(reverseWords('Hello')).toBe('olleH');
    });

    it('should handle an empty word', () => {
        expect(reverseWords('')).toBe('');
    });
});
