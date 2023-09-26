/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = (candyType) => {
    const candyTypeCount = new Set(candyType).size;
    const onlySheCanEat = candyType.length / 2;
    return onlySheCanEat < candyTypeCount ? onlySheCanEat : candyTypeCount;
};


// console.log(distributeCandies([1,1,2,2,3,3]));//3
// console.log(distributeCandies([1,1,2,3]));//2

export default distributeCandies;