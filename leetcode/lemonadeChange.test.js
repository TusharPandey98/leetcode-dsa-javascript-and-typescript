import lemonadeChange from "./lemonadeChange"
describe('lemonadeChange test cases', () => { 
    test('[5, 5, 20, 5, 5, 10, 5, 10, 5, 20] will return false', () => {
        expect(lemonadeChange([5, 5, 20, 5, 5, 10, 5, 10, 5, 20])).toBe(false);
    })
    test('[5, 5, 5, 10, 20] will return true', () => {
        expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
    })
    test('[5, 5, 5, 10, 10, 20, 10, 20, 5, 5] will return false', () => {
        expect(lemonadeChange([5, 5, 5, 10, 10, 20, 10, 20, 5, 5])).toBe(false);
    })
    test('[5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5] will return true', () => {
        expect(lemonadeChange([5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5])).toBe(true);
    })
 })