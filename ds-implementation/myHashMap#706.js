
// var MyHashMap = function () {
//     this.map = [];
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// MyHashMap.prototype.put = function (key, value) {
//     this.map[key] = value;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// MyHashMap.prototype.get = function (key) {
//     if (typeof this.map[key] !== 'undefined') return this.map[key];
//     else return -1;
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashMap.prototype.remove = function (key) {
//     delete this.map[key];
// };

//make it equivalent class
class MyHashMap {
    constructor() {
        this.map = [];
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.map[key] = value;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (typeof this.map[key] !== 'undefined') return this.map[key];
        else return -1;
    }
    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.map[key];
    }
}



// //  Your MyHashMap object will be instantiated and called as such:
// var obj = new MyHashMap()
// obj.remove(2)
// obj.put(3, 11)
// obj.put(4, 13)
// obj.put(15, 6)
// obj.put(6, 15)
// obj.put(8, 8)
// obj.put(11, 0)
// var param_2 = obj.get(11)
// console.log(param_2);
// obj.put(1, 10)
// obj.put(12, 14)
// // obj.remove(1)
// console.log(obj);

export default MyHashMap;
