import calPoints from "./calPoints#682";

describe('calPoints', () => {
    it('should calculate valid points correctly', () => {
        const operations = ['5', '2', 'C', 'D', '+'];
        expect(calPoints(operations)).toBe(30);
    });

    it('should handle multiple consecutive "C" operations correctly', () => {
        const operations = ['5', '2', 'C', 'C', 'C'];
        expect(calPoints(operations)).toBe(0);
    });

    it('should handle "C" followed by valid points correctly', () => {
        const operations = ['5', '2', 'C', 'D', '+', 'C', '3'];
        expect(calPoints(operations)).toBe(18);
    });

    it('should handle "D" and "+" operations correctly', () => {
        const operations = ['5', '2', 'D', '+', 'D', '7', '+'];
        expect(calPoints(operations)).toBe(55);
    });

    it('should handle an empty input array correctly', () => {
        const operations = [];
        expect(calPoints(operations)).toBe(0);
    });

    it('should handle an array with only "C" operations correctly', () => {
        const operations = ['C', 'C', 'C'];
        expect(calPoints(operations)).toBe(0);
    });

    it('should handle an array with only "D" operations correctly', () => {
        const operations = ['D', 'D', 'D'];
        expect(calPoints(operations)).toBe(0);
    });

    it('should handle an array with only "+" operations correctly', () => {
        const operations = ['+', '+', '+'];
        expect(calPoints(operations)).toBe(0);
    });
});
