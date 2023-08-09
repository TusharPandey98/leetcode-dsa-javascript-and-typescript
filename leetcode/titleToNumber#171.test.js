import titleToNumber from "./titleToNumber#171";
describe('Title To Number', () => {
    it('should convert single letters correctly', () => {
        expect(titleToNumber('A')).toBe(1);
        expect(titleToNumber('B')).toBe(2);
        expect(titleToNumber('Y')).toBe(25);
        expect(titleToNumber('Z')).toBe(26);
    });

    it('should convert two-letter titles correctly', () => {
        expect(titleToNumber('AA')).toBe(27);
        expect(titleToNumber('AB')).toBe(28);
        expect(titleToNumber('ZY')).toBe(701);
    });

    it('should convert three-letter titles correctly', () => {
        expect(titleToNumber('AAA')).toBe(703);
        expect(titleToNumber('ABC')).toBe(731);
        expect(titleToNumber('ZZZ')).toBe(18278);
    });
    
});
