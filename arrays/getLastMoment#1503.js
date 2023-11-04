/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
const getLastMoment = (n, left, right) => {
  let ans = 0;

  for (const num of left) {
    ans = Math.max(ans, num);
  }

  for (const num of right) {
    ans = Math.max(ans, n - num);
  }
  return ans;
};

// console.log(getLastMoment(7, [0, 1, 2, 3, 4, 5, 6, 7], []));
// console.log(getLastMoment(7, [], [0, 1, 2, 3]));
// console.log(getLastMoment(4, [4, 3], [0, 1]));
// console.log(getLastMoment(9, [5], [4]));

export default getLastMoment;