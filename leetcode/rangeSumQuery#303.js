/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSum = [0];
    for (let i = 0; i < nums.length; i++) {
        this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefixSum[right + 1] - this.prefixSum[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// const obj = new NumArray([1, 2, 3]);
// console.log(obj.sumRange(0, 2));

export default NumArray;