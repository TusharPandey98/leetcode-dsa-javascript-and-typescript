import arrangeCoins from "./arrangeCoins#441";

describe('arrangeCoins', () => {
    it('should return 0 for n = 0', () => {
        expect(arrangeCoins(0)).toBe(0);
    });

    it('should return 1 for n = 1', () => {
        expect(arrangeCoins(1)).toBe(1);
    });

    it('should return 2 for n = 5', () => {
        expect(arrangeCoins(5)).toBe(2);
    });

    it('should return 3 for n = 8', () => {
        expect(arrangeCoins(8)).toBe(3);
    });

    it('should return 5 for n = 15', () => {
        expect(arrangeCoins(15)).toBe(5);
    });

    it('should return 20 for n = 210', () => {
        expect(arrangeCoins(210)).toBe(20);
    });

    it('should return 44720 for a large n', () => {
        expect(arrangeCoins(1000000000)).toBe(44720);
    });
});
