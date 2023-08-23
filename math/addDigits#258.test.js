import addDigits from "./addDigits#258";

describe('addDigits test cases', () => { 
    test('38 should return 2', () => { 
        expect(addDigits(38)).toBe(2);
     })
    test('0 should return 0', () => { 
        expect(addDigits(0)).toBe(0);
     })
    test('57 should return 3', () => { 
        expect(addDigits(57)).toBe(3);
     })
    test('100 should return 1', () => { 
        expect(addDigits(100)).toBe(1);
     })
    test('99 should return 9', () => { 
        expect(addDigits(99)).toBe(9);
     })
 })