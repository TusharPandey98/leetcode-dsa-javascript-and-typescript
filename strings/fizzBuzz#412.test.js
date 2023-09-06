import fizzBuzz from "./fizzBuzz#412";
describe('fizzBuzz', () => {
    it('should return an empty array when n is 0', () => {
        expect(fizzBuzz(0)).toEqual([]);
    });

    it('should return the correct FizzBuzz sequence for n = 15', () => {
        const expected = [
            '1',
            '2',
            'Fizz',
            '4',
            'Buzz',
            'Fizz',
            '7',
            '8',
            'Fizz',
            'Buzz',
            '11',
            'Fizz',
            '13',
            '14',
            'FizzBuzz',
        ];
        expect(fizzBuzz(15)).toEqual(expected);
    });

    it('should return the correct FizzBuzz sequence for n = 10', () => {
        const expected = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz'];
        expect(fizzBuzz(10)).toEqual(expected);
    });

    it('should return the correct FizzBuzz sequence for n = 1', () => {
        const expected = ['1'];
        expect(fizzBuzz(1)).toEqual(expected);
    });
});
