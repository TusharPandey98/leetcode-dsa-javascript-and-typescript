import findWinners from "./findWinners#2225";
describe('findWinners function', () => {
  test('should return sorted winners and players with one loss', () => {
    const result = findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]);
    expect(result).toEqual([[1,2,10],[4,5,7,8]]);
  });

  test('should return sorted winners and players with one loss for another case', () => {
    const result = findWinners([[2,3],[1,3],[5,4],[6,4]]);
    expect(result).toEqual([[1,2,5,6],[]]);
  });

});
