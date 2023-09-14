/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = (num) => {
    if (num == 0) return '0';
    const isNeagtive = num < 0;
    if (isNeagtive) num = Math.abs(num);
    let base7number = '';

    while (num > 0) {
        // const digit = num % 7;
        // base7number = digit + base7number;
        base7number = (num % 7) + base7number;
        num = Math.floor(num / 7);
    }

    return isNeagtive ? '-' + base7number : base7number;
};



// console.log(convertToBase7(100));
// console.log(convertToBase7(-7));

export default convertToBase7;