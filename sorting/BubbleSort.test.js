import BubbleSort from "./BubbleSort";

describe("BubbleSort's test cases", () => {
    test("[5,4,8,2,1] after sort will [1, 2, 4, 5, 8]", () => {
        expect(BubbleSort([5,4,8,2,1])).toStrictEqual([1, 2, 4, 5, 8]);
    });
});