import canWinNim from "./canWinNim#292";

describe('canWinNim test cases', () => { 
    it('should return true for numbers', () => {
        expect(canWinNim(1)).toBe(true);
        expect(canWinNim(2)).toBe(true);
        expect(canWinNim(3)).toBe(true);
        expect(canWinNim(5)).toBe(true);
        expect(canWinNim(6)).toBe(true);
        expect(canWinNim(9)).toBe(true);
    })
    it('should return false for numbers', () => {
        expect(canWinNim(4)).toBe(false);
        expect(canWinNim(8)).toBe(false);
        expect(canWinNim(12)).toBe(false);
        expect(canWinNim(16)).toBe(false);
        expect(canWinNim(20)).toBe(false);
        expect(canWinNim(24)).toBe(false);
    })
 })