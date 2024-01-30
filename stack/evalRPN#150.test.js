import evalRPN from "./evalRPN#150";
describe('evalRPN function', () => {
    it('evaluates the RPN expression correctly', () => {
        const result = evalRPN(["2", "1", "+", "3", "*"]);
        expect(result).toEqual(9);
    });

    it('handles division by zero gracefully', () => {
        const result = evalRPN(["4", "0", "/"]);
        expect(result).toEqual(0);
    });

    it('evaluates expressions with negative numbers correctly', () => {
        const result = evalRPN(["2", "3", "-"]);
        expect(result).toEqual(-1);
    });

    // Add more test cases as needed

    it('returns 0 for an empty expression', () => {
        const result = evalRPN([]);
        expect(result).toEqual(0);
    });
});
