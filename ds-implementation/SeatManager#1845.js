/**
 * @param {number} n
 */
const SeatManager = function (n) {
    this.seats = new Array(n).fill(null);
    this.lowestSeatIndex = 0;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
    for (let i = 0; i < this.seats.length; i++) {
        if (this.seats[i] === null) {
            this.lowestSeatIndex = i;
            break;
        }
    }
    const currentSeat = this.lowestSeatIndex + 1;
    this.seats[this.lowestSeatIndex] = currentSeat;
    this.lowestSeatIndex = currentSeat;
    return currentSeat;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
    this.seats[seatNumber - 1] = null;
};


//Your SeatManager object will be instantiated and called as such:
// var obj = new SeatManager(5)
// obj.reserve()
// obj.reserve();
// obj.unreserve(2)
// obj.reserve()
// obj.reserve()
// obj.reserve()
// obj.reserve()
// obj.unreserve(5)

