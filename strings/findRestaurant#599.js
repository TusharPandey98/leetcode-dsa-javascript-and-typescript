/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
// const findRestaurant = (list1, list2) => {

//     let listOneLength = list1.length, listTwoLength = list2.length;

//     if (listTwoLength < listOneLength) {
//         const temp = list1;
//         list1 = list2;
//         list2 = temp;
//     }

//     listOneLength = list1.length, listTwoLength = list2.length

//     const uniqueRestaurant = new Map();

//     for (let i = 0; i < listOneLength; i++) {
//         uniqueRestaurant.set(list1[i], i);
//     }

//     for (let i = 0; i < listTwoLength; i++) {
//         const currentString = list2[i];
//         if (uniqueRestaurant.has(currentString)) {
//             uniqueRestaurant.set(currentString, { unique: true, value: uniqueRestaurant.get(currentString) + i });
//         }
//     }

//     let minimum = Infinity;

//     for (const [key, value] of uniqueRestaurant) {
//         if (typeof value !== 'object') uniqueRestaurant.delete(key);
//         else minimum = Math.min(value.value, minimum);
//     }

//     const result = [];

//     for (const [key, value] of uniqueRestaurant) {
//         if (value.value === minimum) result.push(key)
//     }

//     return result
// };

//more optimized
const findRestaurant = (list1, list2) => {
    const restaurantMap = new Map();
    let minimumIndexSum = Infinity;
    const result = [];

    for (let i = 0; i < list1.length; i++) {
        restaurantMap.set(list1[i], i);
    }

    for (let i = 0; i < list2.length; i++) {
        if (restaurantMap.has(list2[i])) {
            const indexSum = i + restaurantMap.get(list2[i]);
            if (indexSum < minimumIndexSum) {
                minimumIndexSum = indexSum;
                result.length = 0; 
                result.push(list2[i]);
            } else if (indexSum === minimumIndexSum) {
                result.push(list2[i]);
            }
        }
    }

    return result;
};

// console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));
// console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]));
// console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]));
// console.log(findRestaurant(["KFC", "Burger King", "Tapioca Express", "Shogun"], ["Shogun", "Tapioca Express", "Burger King", "KFC"]));

export default findRestaurant;