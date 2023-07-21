const  groupBy = require('./groupBy#2631')
describe('Array.prototype.groupBy', () => {
    test('groups objects by a property', () => {
      const people = [
        { name: 'John', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Eve', age: 25 },
      ];
  
      const result = people.groupBy(person => person.age);
  
      expect(result).toEqual({
        30: [
          { name: 'John', age: 30 },
          { name: 'Bob', age: 30 },
        ],
        25: [
          { name: 'Alice', age: 25 },
          { name: 'Eve', age: 25 },
        ],
      });
    });
  
    test('groups objects by a computed value', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
      const result = numbers.groupBy(num => num % 2 === 0 ? 'even' : 'odd');
  
      expect(result).toEqual({
        odd: [1, 3, 5, 7, 9],
        even: [2, 4, 6, 8, 10],
      });
    });
  
    test('groups objects by a string property', () => {
      const fruits = ['apple', 'banana', 'orange', 'grape', 'apple'];
  
      const result = fruits.groupBy(fruit => fruit);
  
      expect(result).toEqual({
        apple: ['apple', 'apple'],
        banana: ['banana'],
        orange: ['orange'],
        grape: ['grape'],
      });
    });
  
    test('handles an empty array', () => {
      const emptyArray = [];
  
      const result = emptyArray.groupBy(item => item);
  
      expect(result).toEqual({});
    });
  });