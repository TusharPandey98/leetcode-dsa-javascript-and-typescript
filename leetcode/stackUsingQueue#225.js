var MyStack = function () {
    this.queue = [];
    this.topIndex = -1;
}


/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x);
    this.topIndex++;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.topIndex > -1) {
        this.topIndex--;
        return this.queue.pop()
    }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.queue[this.topIndex];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.topIndex == -1 ? true : false;
};
// var obj = new MyStack()
// obj.push(1)
// obj.push(2)
// var param_2 = obj.pop()
// var param_3 = obj.top()
// var param_4 = obj.empty()
/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

export default MyStack