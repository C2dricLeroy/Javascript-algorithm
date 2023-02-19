function mergeArrays(arr1, arr2) {
    let arr = arr1.concat(arr2).sort((a, b) => a - b);
    let sorted = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            sorted.push(arr[i])
        }
    } return sorted
}