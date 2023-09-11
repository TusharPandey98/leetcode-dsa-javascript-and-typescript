import licenseKeyFormatting from "./licenseKeyFormatting#482";

describe('licenseKeyFormatting', () => {
    it('should format a license key with a hyphen for k=4', () => {
        const inputString = "2-4A0r7-4k";
        const k = 4;
        const expectedResult = "24A0-R74K";
        const result = licenseKeyFormatting(inputString, k);
        expect(result).toBe(expectedResult);
    });

    it('should format a license key with a hyphen for k=3', () => {
        const inputString = "2-4A0r7-4k";
        const k = 3;
        const expectedResult = "24-A0R-74K";
        const result = licenseKeyFormatting(inputString, k);
        expect(result).toBe(expectedResult);
    });

    it('should format a license key without hyphens for k=1', () => {
        const inputString = "2-4A0r7-4k";
        const k = 1;
        const expectedResult = "2-4-A-0-R-7-4-K";
        const result = licenseKeyFormatting(inputString, k);
        expect(result).toBe(expectedResult);
    });

    it('should format a license key without hyphens for k greater than the string length', () => {
        const inputString = "2-4A0r7-4k";
        const k = 10;
        const expectedResult = "24A0R74K";
        const result = licenseKeyFormatting(inputString, k);
        expect(result).toBe(expectedResult);
    });
});
