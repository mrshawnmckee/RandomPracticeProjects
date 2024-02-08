// sort in js is weird. Here is how to sort by numerical order: 
function numberCompare (num1, num2){
    return num1 - num2
}

[6, 15, 4, 10].sort(numberCompare);


// Swapping: 
// ES5
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp; 
}

// ES2015

const newSwap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// ^ means anything that is not the following, g is for global, then , '' means replace with nothing
// To remove nonalphanumeric: .replace(/[^a-z0-9/g, '') More example of this in th
// JS directory