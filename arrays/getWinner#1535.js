/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const getWinner = (arr, k) => {
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxElement = Math.max(maxElement, arr[i]);
    }
    
    let curr = arr[0];
    let winstreak = 0;
    
    for (let i = 1; i < arr.length; i++) {
        let opponent = arr[i];
        
        if (curr > opponent) {
            winstreak++;
        } else {
            curr = opponent;
            winstreak = 1;
        }
        
        if (winstreak === k || curr === maxElement) {
            return curr;
        }
    }
    
    return -1;
};

// console.log(getWinner([1, 25, 35, 42, 68, 70], 2));
// console.log(getWinner([1, 25, 35, 42, 68, 70], 2));

export default getWinner;
