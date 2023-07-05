export default lemonadeChange = (bills) => {
    let five = 0, ten = 0;
    for (const bill of bills) {
        if (bill === 5) {
            five++;
        }
        if (bill === 10) {
            if (five === 0) return false;
            five--;
            ten++;
        }
        if (bill === 20) {
            if (five > 0 && ten > 0) {
                five--;
                ten--;
            }
            else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
}
// console.log(lemonadeChange([5, 5, 20, 5, 5, 10, 5, 10, 5, 20]))
// console.log(lemonadeChange([5, 5, 5, 10, 20]))
// console.log(lemonadeChange([5, 5, 5, 10, 10, 20, 10, 20, 5, 5]))
// console.log(lemonadeChange([5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5]))