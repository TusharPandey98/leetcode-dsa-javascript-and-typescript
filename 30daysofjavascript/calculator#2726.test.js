import Calculator from "./calculator#2726";

describe('Calculator', () => {
  test('Basic addition and subtraction', () => {
    const calculator = new Calculator(10).add(5).subtract(2).getResult();
    expect(calculator).toBe(13);
  });

  test('Chaining multiple operations', () => {
    const calculator = new Calculator(20).add(8).subtract(5).add(2).subtract(10).getResult();
    expect(calculator).toBe(15);
  });

  test('Starting with negative value and chaining', () => {
    const calculator = new Calculator(-5).add(8).add(10).subtract(3).subtract(5).getResult();
    expect(calculator).toBe(5);
  });

  test('Chaining with negative numbers', () => {
    const calculator = new Calculator(100).add(50).add(-20).subtract(-10).getResult();
    expect(calculator).toBe(140);
  });

  test('Starting with zero and chaining', () => {
    const calculator = new Calculator(0).add(15).subtract(5).add(10).subtract(8).getResult();
    expect(calculator).toBe(12);
  });
});