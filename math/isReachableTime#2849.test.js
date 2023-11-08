import isReachableAtTime from "./isReachableAtTime#2849";

describe('isReachableAtTime', () => {
  it('should return false if the start and finish positions are the same and time is 1', () => {
    expect(isReachableAtTime(1, 1, 1, 1, 1)).toBe(false);
  });

  it('should return false if it takes more time than provided to reach the destination', () => {
    expect(isReachableAtTime(1, 1, 5, 5, 3)).toBe(false);
  });

  it('should return true if it takes exactly the provided time to reach the destination (horizontal movement)', () => {
    expect(isReachableAtTime(1, 1, 5, 1, 4)).toBe(true);
  });

  it('should return true if it takes exactly the provided time to reach the destination (vertical movement)', () => {
    expect(isReachableAtTime(1, 1, 1, 5, 4)).toBe(true);
  });

  it('should return true if it takes exactly the provided time to reach the destination (diagonal movement)', () => {
    expect(isReachableAtTime(1, 1, 5, 5, 4)).toBe(true);
  });

  it('should return true if it takes more time than provided but there is enough time for diagonal movement', () => {
    expect(isReachableAtTime(1, 1, 5, 5, 5)).toBe(true);
  });
});
