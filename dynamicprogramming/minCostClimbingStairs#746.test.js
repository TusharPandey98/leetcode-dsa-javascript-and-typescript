import minCostClimbingStairs from "./minCostClimbingStairs#746";

describe("minCostClimbingStairs", () => {
    it("should return the minimum cost for the given input", () => {
        // Test case 1
        const cost1 = [10, 15, 20];
        expect(minCostClimbingStairs(cost1)).toBe(15);

        // Test case 2
        const cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
        expect(minCostClimbingStairs(cost2)).toBe(6);
    });
});