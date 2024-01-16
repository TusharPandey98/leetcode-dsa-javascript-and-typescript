import RandomizedSet from "./RandomizedSet#380";

describe('RandomizedSet', () => {
  let randomizedSet;

  beforeEach(() => {
    randomizedSet = new RandomizedSet();
  });

  test('insert and getRandom', () => {
    expect(randomizedSet.insert(1)).toBe(true);
    expect(randomizedSet.getRandom()).toBe(1);
  });

  test('insert, remove, and getRandom', () => {
    randomizedSet.insert(1);
    randomizedSet.insert(2);
    randomizedSet.insert(3);

    expect(randomizedSet.remove(2)).toBe(true);
    const result = randomizedSet.getRandom();
    expect([1, 3]).toContain(result);
  });

  test('remove non-existing element', () => {
    expect(randomizedSet.remove(1)).toBe(false);
  });

  test('insert, remove, and getRandom with duplicates', () => {
    randomizedSet.insert(1);
    randomizedSet.insert(2);
    randomizedSet.insert(3);

    expect(randomizedSet.remove(2)).toBe(true);
    expect(randomizedSet.insert(2)).toBe(true);

    const result = randomizedSet.getRandom();
    expect([1, 3, 2]).toContain(result);
  });

  test('remove and getRandom with a single element', () => {
    randomizedSet.insert(5);
    expect(randomizedSet.getRandom()).toBe(5);
  });
});
