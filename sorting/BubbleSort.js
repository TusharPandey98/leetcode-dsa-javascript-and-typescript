const BubbleSort = (arr)=>{
    const arrLength = arr.length;
    for (let step = 0; step < arrLength - 1; step++) {
        for (let i = 0; i < arrLength - step - 1; i++) {
            if(arr[i] > arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
            }
        }
    }
    return arr;
}

export default BubbleSort;