import toHex from "./toHex#405";

describe('toHex', () => {
    it('should convert decimal 26 to hexadecimal', () => {
        expect(toHex(26)).toBe('1a');
    });

    it('should convert decimal 32 to hexadecimal', () => {
        expect(toHex(32)).toBe('20');
    });

    it('should convert decimal 16 to hexadecimal', () => {
        expect(toHex(16)).toBe('10');
    });

    it('should convert decimal -1 to hexadecimal', () => {
        expect(toHex(-1)).toBe('ffffffff');
    });

    it('should convert decimal 0 to hexadecimal', () => {
        expect(toHex(0)).toBe('0');
    });

    it('should convert decimal 255 to hexadecimal', () => {
        expect(toHex(255)).toBe('ff');
    });
});
