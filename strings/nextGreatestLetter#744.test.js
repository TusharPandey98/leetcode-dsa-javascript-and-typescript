import nextGreatestLetter from "./nextGreatestLetter#744";

describe('nextGreatestLetter function', () => {
    it('should return "c" for letters ["c", "f", "j"] and target "a"', () => {
        expect(nextGreatestLetter(["c", "f", "j"], 'a')).toBe('c');
    });

    it('should return "f" for letters ["c", "f", "j"] and target "c"', () => {
        expect(nextGreatestLetter(["c", "f", "j"], 'c')).toBe('f');
    });

    it('should return "c" for letters ["c", "f", "j"] and target "z"', () => {
        expect(nextGreatestLetter(["c", "f", "j"], 'z')).toBe('c');
    });

    it('should return "x" for letters ["x", "x", "y", "y"] and target "z"', () => {
        expect(nextGreatestLetter(["x", "x", "y", "y"], 'z')).toBe('x');
    });

    it('should return "c" for letters ["c", "f", "j"] and target "k"', () => {
        expect(nextGreatestLetter(["c", "f", "j"], 'k')).toBe('c');
    });

    it('should return "c" for letters ["c", "f", "j"] and target "j"', () => {
        expect(nextGreatestLetter(["c", "f", "j"], 'j')).toBe('c');
    });
});
