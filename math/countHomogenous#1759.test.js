import countHomogenous from "./countHomogenous#1759"
describe('countHomogenous test cases', () => {
    it('abbcccaa will return 13', () => {
        expect(countHomogenous('abbcccaa')).toBe(13);
    })
    it('cccaa will return 9', () => {
        expect(countHomogenous('cccaa')).toBe(9);
    })
    it('zzzzz will return 15', () => {
        expect(countHomogenous('zzzzz')).toBe(15);
    })
    it('xy will return 2', () => {
        expect(countHomogenous('xy')).toBe(2);
    })
})