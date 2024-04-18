let array1 = [132, 99, 10, 1991, 3, 56340,-14, 3.5];
let reversedArr1 = array1.reverse();
let diffs = 0;
let swaps = 0;

function sort(array, checking = true){
    const n = array.length;
    for(let i = 0; i < n; i++){
        ++diffs;
        for (let j = 0; j < n - i - 1; j++){
            if(checking ? array[j] > array[j + 1] : array[j] < array[j + 1]){
                const swapped = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swapped;
                ++swaps;
            }
        }
    }
    console.log(`Кількість порівнянь: ${diffs}`);
    console.log(`Кількість переставлять: ${swaps}`);
    console.log(array);
}
sort(array1);
sort(array1, false);


function selectionSort(array, checking = true) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        ++diffs;
        for (let j = i + 1; j < n; j++) {
            if (checking ? array[j] < array[minIndex] : array[j] > array[minIndex]) {
                minIndex = j;
                ++swaps;
            }
        }
        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    console.log(`Кількість порівнянь: ${diffs}`);
    console.log(`Кількість переставлять: ${swaps}`);
    console.log(array);
}
selectionSort(array1);
selectionSort(array1, false);

function insertionSort(array, checking = true){
    n = array.length;
    for (let j = 1; j < n; j++){
        let x = array[j];
        let i = j - 1;
        ++diffs;
        while ((checking ? i >= 0 && array[i] > x : i >= 0 && array[i] < x)){
            array[i + 1] = array[i];
            i--;
            array[i + 1] = x;
            ++swaps;
        }
    }
    console.log(`Кількість порівнянь: ${diffs}`);
    console.log(`Кількість переставлять: ${swaps}`);
    console.log(array);
}
insertionSort(array1);
insertionSort(array1, false);



