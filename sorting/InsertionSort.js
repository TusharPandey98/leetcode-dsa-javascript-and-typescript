const InsertionSort = (arr) =>{
    const arrLength = arr.length;
    for (let step = 1; step < arrLength; step++) {
        let key = arr[step], j = step-1;
        while(j>=0 && key < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const unSortedArr = [20, 12, 10, 15, 2];
console.log(InsertionSort(unSortedArr));
