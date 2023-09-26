import distributeCandies from "./distributeCandies#575";
describe('distributeCandies', () => {
    it('should return 1 when there is only one type of candy', () => {
        const candyType = [1, 1, 1, 1, 1, 1];
        expect(distributeCandies(candyType)).toBe(1);
    });

    it('should return 2 when there are two types of candy and Alice can eat all of them', () => {
        const candyType = [1, 2, 1, 2, 1, 2];
        expect(distributeCandies(candyType)).toBe(2);
    });

    it('should return half of the candies when there are many types but Alice can eat only half', () => {
        const candyType = [1, 2, 3, 4, 5, 6];
        expect(distributeCandies(candyType)).toBe(3);
    });

    it('should return the maximum possible when there are many candies of the same type', () => {
        const candyType = [1, 1, 1, 2, 2, 3];
        expect(distributeCandies(candyType)).toBe(3);
    });

    it('should return 0 when the input array is empty', () => {
        const candyType = [];
        expect(distributeCandies(candyType)).toBe(0);
    });

    it('should return 3 when Alice  eat any candies', () => {
        const candyType = [1, 2, 3, 4, 5, 6];
        expect(distributeCandies(candyType)).toBe(3);
    });
});
