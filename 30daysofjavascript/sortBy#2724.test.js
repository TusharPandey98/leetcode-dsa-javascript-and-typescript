import sortBy from "./sortBy#2724";
describe('Sort By test cases', () => {
    test('Sort an empty array', () => {
        const arr = [];
        const fn = (num) => num;
        const sortedArr = sortBy(arr, fn);
        expect(sortedArr).toEqual([]);
    });

    test('Sort numbers in ascending order', () => {
        const arr = [4, 1, 3, 2, 5];
        const fn = (num) => num;
        const sortedArr = sortBy(arr, fn);
        expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
    });

    test('Sort strings in ascending order based on length', () => {
        const arr = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const fn = (str) => str.length;
        const sortedArr = sortBy(arr, fn);
        expect(sortedArr).toEqual(['kiwi', 'apple', 'grape', 'banana', 'orange']);
    });

    test('Sort objects in descending order based on a property', () => {
        const arr = [
            { name: 'John', age: 30 },
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 35 },
        ];
        const fn = (person) => person.age;
        const sortedArr = sortBy(arr, fn).reverse();
        expect(sortedArr).toEqual([
            { name: 'Bob', age: 35 },
            { name: 'John', age: 30 },
            { name: 'Alice', age: 25 },
        ]);
    });
})