import solution from "./firstBadVersion#278";


describe('solution', () => {
    it('should find the first bad version', () => {
        // Mock isBadVersion function
        const isBadVersion = (version) => version >= 4; // Assuming the first bad version is 4

        const findBadVersion = solution(isBadVersion);

        expect(findBadVersion(5)).toBe(4); // First bad version is 4
        expect(findBadVersion(10)).toBe(4); // First bad version is 4
        expect(findBadVersion(20)).toBe(4); // First bad version is 4
        expect(findBadVersion(1)).toBe(1); // First bad version is 1
        // Add more test cases with different scenarios
    });
});
