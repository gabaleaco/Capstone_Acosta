import React from 'react';

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        
        let current = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
        arr[j + 1] = arr[j];
        }
    }
    return arr;
}

export default insertionSort;