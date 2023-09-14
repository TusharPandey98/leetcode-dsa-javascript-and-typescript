import convertToBase7 from "./convertToBase7#504";

describe('convertToBase7', () => {
    it('should return "0" for input 0', () => {
        const result = convertToBase7(0);
        expect(result).toBe("0");
    });

    it('should return "202" for input 100', () => {
        const result = convertToBase7(100);
        expect(result).toBe("202");
    });

    it('should return "-10" for input -7', () => {
        const result = convertToBase7(-7);
        expect(result).toBe("-10");
    });

    it('should return "41" for input 29', () => {
        const result = convertToBase7(29);
        expect(result).toBe("41");
    });

    it('should return "2626" for input 1000', () => {
        const result = convertToBase7(1000);
        expect(result).toBe("2626");
    });

    it('should return "2466021541" for input 109418989', () => {
        const result = convertToBase7(109418989);
        expect(result).toBe("2466021541");
    });

    it('should return "-2466021541" for input -109418989', () => {
        const result = convertToBase7(-109418989);
        expect(result).toBe("-2466021541");
    });
});
