/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
// const buildArray = (target, n) => {
//   const operations = [];
//   let targetIndex = 0;

//   for (const num of target) {
//     while (targetIndex < num - 1) {
//       operations.push("Push");
//       operations.push("Pop");
//       targetIndex++;
//     }
//     operations.push("Push");
//     targetIndex++;
//     if (targetIndex === target.length) break;
//   }
//   return operations;
// };

//second appraoch

const buildArray = (target, n) => {
  const operations = [];
  let targetIndex = 0;

  for (let i = 1; i <= n; i++) {
    operations.push("Push");
    if (i === target[targetIndex]) {
      targetIndex++;
    } else {
      operations.push("Pop");
    }
    if (target.length === targetIndex) break;
  }
  return operations;
};

// console.log(buildArray([1, 3], 3));
// console.log(buildArray([1, 2, 3], 3));
// console.log(buildArray([1, 2], 4));

export default buildArray;
