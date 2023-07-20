/**
 * @param {number[]} prices
 * @return {number}
 */
/** Itrative method */
// const maxProfit = (prices) => {
//     if (prices.length === 0) return 0;
//     let maxProfit = 0, maxCurrent = 0;
//     for (let i = 1; i < prices.length; i++) {
//         maxCurrent = Math.max(0, maxCurrent += prices[i] - prices[i - 1]);
//         maxProfit = Math.max(maxCurrent, maxProfit);
//     }
//     return maxProfit;
// };

/** Two Pointer method */
// const maxProfit = (prices) => {
//     if (prices.length === 0) return 0;
//     let left = 0, right = 1,maxProfit = 0;
//     while(right < prices.length){
//         if(prices[left] < prices[right]){
//             let currentProfit = prices[right] - prices[left];
//             maxProfit = Math.max(currentProfit,maxProfit);
//         }else{
//             left = right;
//         }
//         right++;
//     }
//     return maxProfit;
// }


var maxProfit = function(prices) {
    var min = Number.MAX_SAFE_INTEGER; 
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};

// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

export default maxProfit;