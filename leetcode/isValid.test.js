import isValid from "./isValid"
describe('valid parentheses test cases', () => { 
    test('[{()}] will return true', () => { 
        expect(isValid('[{()}]')).toBe(true);
     })
    test('{()} will return true', () => { 
        expect(isValid('{()}')).toBe(true);
     })
    test('() will return true', () => { 
        expect(isValid('()')).toBe(true);
     })
    test('(){}[] will return true', () => { 
        expect(isValid('(){}[]')).toBe(true);
     })
    test('(] will return false', () => { 
        expect(isValid('(]')).toBe(false);
     })
    test('] will return false', () => { 
        expect(isValid('(]')).toBe(false);
     })
 })