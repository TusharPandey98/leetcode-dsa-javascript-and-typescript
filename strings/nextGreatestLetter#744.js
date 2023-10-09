/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
    let left = 0, right = letters.length;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        const midChar = letters[mid];

        if (midChar <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // If 'left' is out of bounds, wrap around to the first character.
    return letters[left % letters.length];
};



// console.log(nextGreatestLetter(["c","f","j"],'a'));
// console.log(nextGreatestLetter(["c","f","j"],'g'));
// console.log(nextGreatestLetter(["c","f","j"],'j'));
// console.log(nextGreatestLetter(["c", "f", "j"], 'c'));
// console.log(nextGreatestLetter(["x", "x", "y", "y"], 'z'));

export default nextGreatestLetter;