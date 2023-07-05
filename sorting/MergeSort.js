const MergeSort = (arr, start, end) => {
    divide(arr,start,end);
    return arr;
}

const divide = (arr, start, end) => {
    if (start >= end) {
        return;
    }
    const mid = Math.floor(start + (end - start) / 2);
    divide(arr, start, mid);
    divide(arr, mid + 1, end);
    conquer(arr, start, mid, end);
}

const conquer = (arr, start, mid, end) => {
    const merged = [end - start + 1];

    let arrOneIndex = start, arrTwoIndex = mid + 1, mergeArrIndex = 0;

    while (arrOneIndex <= mid && arrTwoIndex <= end) {
        if (arr[arrOneIndex] <= arr[arrTwoIndex]) {
            merged[mergeArrIndex++] = arr[arrOneIndex++];
        } else {
            merged[mergeArrIndex++] = arr[arrTwoIndex++];   
        }
    }

    while (arrOneIndex <= mid) {
        merged[mergeArrIndex++] = arr[arrOneIndex++];
    }
    while (arrTwoIndex <= end) {
        merged[mergeArrIndex++] = arr[arrTwoIndex++];
    }

    for (let i=0,j = start; i < merged.length; i++,j++) {
        arr[j] = merged[i]
    }
}
const unSortedArr = [20, 12, 10, 15, 2];

console.log(MergeSort(unSortedArr,0,unSortedArr.length - 1));