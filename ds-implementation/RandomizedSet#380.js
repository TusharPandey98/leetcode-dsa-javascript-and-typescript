
const RandomizedSet = function () {
    this.nums = [];
    this.indexMap = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.indexMap[val] !== undefined) return false;
    this.nums.push(val);
    this.indexMap[val] = this.nums.length - 1;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if(this.indexMap[val] === undefined) return false;
    const lastElement = this.nums[this.nums.length -1];
    const valIndex = this.indexMap[val];
    
    this.nums[valIndex] = lastElement;
    this.indexMap[lastElement] = valIndex;

    this.nums.pop();
    delete this.indexMap[val];

    return true; 
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const randomIndex = Math.floor(Math.random() * this.nums.length);
    return this.nums[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

export default RandomizedSet;