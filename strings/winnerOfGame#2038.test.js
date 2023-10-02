import winnerOfGame from "./winnerOfGame#2038";

describe('winnerOfGame function', () => {
    test('Alice wins with consecutive "AAA"', () => {
        const colors = 'AAABBBAAA';
        expect(winnerOfGame(colors)).toBe(true);
    });

    test('Bob wins with consecutive "BBB"', () => {
        const colors = 'AABBBBAA';
        expect(winnerOfGame(colors)).toBe(false);
    });

    test('No winner with consecutive "AAA" and "BBB"', () => {
        const colors = 'AAAABBBBAA';
        expect(winnerOfGame(colors)).toBe(false);
    });

    test('No winner with no consecutive sequences', () => {
        const colors = 'ABABABAB';
        expect(winnerOfGame(colors)).toBe(false);
    });

    test('Alice wins with consecutive "AAA" at the beginning', () => {
        const colors = 'AAAABBB';
        expect(winnerOfGame(colors)).toBe(true);
    });

    test('Bob wins with consecutive "BBB" at the end', () => {
        const colors = 'AABBBAAA';
        expect(winnerOfGame(colors)).toBe(false);
    });
});
