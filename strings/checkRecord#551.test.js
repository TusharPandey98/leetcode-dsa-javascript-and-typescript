import checkRecord from "./checkRecord#551";

describe('checkRecord function', () => {
  it('should return true for a valid attendance record', () => {
    expect(checkRecord('PPALLP')).toBe(true);
    expect(checkRecord('PAPLPL')).toBe(true);
  });

  it('should return false for an attendance record with more than one "A"', () => {
    expect(checkRecord('PPAALLP')).toBe(false);
    expect(checkRecord('PAALLP')).toBe(false);
  });

  it('should return false for an attendance record with more than two consecutive "L"s', () => {
    expect(checkRecord('PALLLP')).toBe(false);
    expect(checkRecord('PALPLL')).toBe(true);
  });

  it('should return true for an empty attendance record', () => {
    expect(checkRecord('')).toBe(true);
  });
});
