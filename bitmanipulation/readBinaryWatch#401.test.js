import readBinaryWatch from "./readBinaryWatch#401";

describe('readBinaryWatch', () => {
    it('should return valid times for turnedOn = 1', () => {
        const result = readBinaryWatch(1);
        expect(result).toEqual(["0:01", "0:02", "0:04", "0:08", "0:16", "0:32", "1:00", "2:00", "4:00", "8:00"]);
    });

    it('should return an empty array for turnedOn = 9', () => {
        const result = readBinaryWatch(9);
        expect(result).toEqual([]);
    });

    it('should handle turnedOn = 0', () => {
        const result = readBinaryWatch(0);
        expect(result).toEqual(["0:00"]);
    });

    it('should handle all LEDs turned on (turnedOn = 10)', () => {
        const result = readBinaryWatch(10);
        expect(result).toEqual([]);
    });
});
