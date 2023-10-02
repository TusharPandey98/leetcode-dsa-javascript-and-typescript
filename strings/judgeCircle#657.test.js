import judgeCircle from "./judgeCircle#657";

describe('judgeCircle Test cases', () => {

    test('Moves result in returning to the origin', () => {
        const moves = 'UDLR'; // Example input where moves cancel each other out
        expect(judgeCircle(moves)).toBe(true);
    });

    test('Moves do not result in returning to the origin', () => {
        const moves = 'UDLRU'; // Example input where moves do not cancel out
        expect(judgeCircle(moves)).toBe(false);
    });

    test('Empty string input', () => {
        const moves = '';
        expect(judgeCircle(moves)).toBe(true); // Empty string should return true by definition
    });

    test('Only horizontal moves', () => {
        const moves = 'LR';
        expect(judgeCircle(moves)).toBe(true);
    });

    test('Only vertical moves', () => {
        const moves = 'UD';
        expect(judgeCircle(moves)).toBe(true);
    });

    test('Random moves', () => {
        const moves = 'UDLRLRUD'; // Example with random moves
        expect(judgeCircle(moves)).toBe(true);
    });

})
