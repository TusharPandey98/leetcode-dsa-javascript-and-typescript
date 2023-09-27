/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        const element = flowerbed[i];
        if (element == 0) {
            const emptyLeftPlot = (i === 0) || (flowerbed[i - 1] === 0)
            const emptyRightPlot = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0)

            if (emptyLeftPlot && emptyRightPlot) {
                flowerbed[i] = 1;
                count++;

                if (count >= n) return true;
            }
        }
    }

    return count >= n;
};


// console.log(canPlaceFlowers([1,0,0,0,1],1));
// console.log(canPlaceFlowers([1,0,0,0,1],2));

export default canPlaceFlowers;