/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  const swap = (left, right) => {
    if (left >= right) return;
    [s[left], s[right]] = [s[right], s[left]];
    swap(++left, --right);
  };
  swap(0, s.length - 1);
  return s;
};


export default reverseString;
// console.log(reverseString(["h","e","l","l","o"]));