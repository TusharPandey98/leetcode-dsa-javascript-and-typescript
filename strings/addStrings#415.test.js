import addStrings from "./addStrings#415";


describe('addStrings', () => {
    it('should return the sum of two positive integers', () => {
        expect(addStrings("11", "123")).toBe("134");
        expect(addStrings("456", "77")).toBe("533");
        expect(addStrings("123456789", "987654321")).toBe("1111111110");
    });

    it('should handle the case when one of the numbers is zero', () => {
        expect(addStrings("0", "123")).toBe("123");
        expect(addStrings("456", "0")).toBe("456");
        expect(addStrings("0", "0")).toBe("0");
    });

    it('should handle large numbers', () => {
        const num1 = "9999999999999999999999999999999999999999999999";
        const num2 = "1";
        expect(addStrings(num1, num2)).toBe("10000000000000000000000000000000000000000000000");
    });

    it('should handle numbers of different lengths', () => {
        expect(addStrings("12345", "67890")).toBe("80235");
        expect(addStrings("123", "12345")).toBe("12468");
    });
});
