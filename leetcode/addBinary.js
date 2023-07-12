/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    let carry = 0, newArr = [];
    let i = a.length - 1, j = b.length - 1;

    while (i >= 0 || j >= 0) {
        const digitA = i >= 0 ? Number(a[i]) : 0;
        const digitB = j >= 0 ? Number(b[j]) : 0;
        const sum = digitA + digitB + carry;

        newArr.unshift(sum % 2);
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }

    if (carry > 0) {
        newArr.unshift(carry);
    }

    return newArr.join('');
};

// const addBinary = (a, b) => {
//     let carry = 0;
//     let result = '';
  
//     let i = a.length - 1;
//     let j = b.length - 1;
  
//     while (i >= 0 || j >= 0 || carry > 0) {
//       const digitA = i >= 0 ? parseInt(a[i]) : 0;
//       const digitB = j >= 0 ? parseInt(b[j]) : 0;
  
//       const sum = digitA ^ digitB ^ carry;
//       carry = (digitA & digitB) | (digitA & carry) | (digitB & carry);
  
//       result = sum.toString() + result;
  
//       i--;
//       j--;
//     }
  
//     return result;
//   };

  // const addBinary = (a, b) => {
  //   const numA = BigInt(`0b${a}`);
  //   const numB = BigInt(`0b${b}`);
  //   const sum = (numA + numB).toString(2);
  //   return sum;
  // };
// console.log(addBinary('11', '11'));
// console.log(addBinary('11', '10'));
// console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));