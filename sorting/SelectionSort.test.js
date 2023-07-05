import SelectionSort from "./SelectionSort";

describe("SelectionSort's test cases", () => {
    test("[5,4,8,2,1] after sort will [1, 2, 4, 5, 8]", () => {
        expect(SelectionSort([5,4,8,2,1])).toStrictEqual([1, 2, 4, 5, 8]);
    });
    test("[20, 12, 10, 15, 2] after sort will [2, 10, 12, 15, 20]", () => {
        expect(SelectionSort([20, 12, 10, 15, 2])).toStrictEqual([2, 10, 12, 15, 20 ]);
    });
});