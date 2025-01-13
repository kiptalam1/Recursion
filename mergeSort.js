// RECURSIVE MERGE-SORT ALGORITHM.

function mergeSort(arr) {
    // base cases.
    if (arr.length <= 1) return arr;
    // divide the array into two halves.
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    // base cases.
    if (left.length === 0) return right;
    if (right.length === 0) return left;

    if (left[0] < right[0]) {
        return [left[0], ...merge(left.slice(1), right)];
    } else {
        return [right[0], ...merge(left, right.slice(1))];
    }
}


let array1 = [3, 2, 1, 13, 8, 5, 0, 1];
let array2 = [105, 79, 100, 110];


console.log(mergeSort(array1))

// or.

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Test cases
let arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
let arr2 = [105, 79, 100, 110];

console.log(mergeSort(arr1)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(arr2)); // [79, 100, 105, 110]