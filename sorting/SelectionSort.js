const SelectionSort = (arr) => {
    const arrLength = arr.length;
    for (let step = 0; step < arrLength - 1; step++) {
        let minIndex = step;
        for (let i = step + 1; i < arrLength; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }
        [arr[step], arr[minIndex]] = [arr[minIndex], arr[step]]
    }
    return arr;
}

export default SelectionSort;
// const unSortedArr = [20, 12, 10, 15, 2];
// console.log(SelectionSort(unSortedArr));

