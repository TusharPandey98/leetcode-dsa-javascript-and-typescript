import findContentChildren from "./findContentChildren#455";


describe('findContentChildren', () => {
    it('should return 0 when no children or cookies are present', () => {
        expect(findContentChildren([], [])).toBe(0);
    });

    it('should return 0 when no cookies are available', () => {
        expect(findContentChildren([1, 2, 3], [])).toBe(0);
    });

    it('should return 0 when no children have greed', () => {
        expect(findContentChildren([], [1, 2, 3])).toBe(0);
    });

    it('should return 1 for minimal input (1 child and 1 cookie)', () => {
        expect(findContentChildren([1], [1])).toBe(1);
    });

    it('should return 1 when only one child can be content', () => {
        expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1);
    });

    it('should return 2 when all children can be content', () => {
        expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2);
    });

    it('should return 2 with extra cookies that are not used', () => {
        expect(findContentChildren([1, 2], [1, 2, 3, 4, 5])).toBe(2);
    });

    it('should return 3 when some children have high greed', () => {
        expect(findContentChildren([3, 4, 5], [1, 2, 3, 4, 5])).toBe(3);
    });

    it('should return 0 when cookies are smaller than all greed factors', () => {
        expect(findContentChildren([4, 5, 6], [1, 2, 3])).toBe(0);
    });
});
