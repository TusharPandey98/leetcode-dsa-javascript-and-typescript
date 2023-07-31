class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw "Division by zero is not allowed";
        }
        this.result /= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value;
        return this;
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.result
    }
}

// function Calculator(value) {
//     this.result = value;
// }
// Calculator.prototype = {
//     add: function (value) {
//         this.result += value;
//         return this;
//     },
//     subtract: function (value) {
//         this.result -= value;
//         return this;
//     },
//     multiply: function (value) {
//         this.result *= value;
//         return this;
//     },
//     getResult: function () {
//         return this.result;
//     },
// };

// const calculator = new Calculator(10).add(5).multiply(4).getResult();
// console.log(calculator);

export default Calculator;