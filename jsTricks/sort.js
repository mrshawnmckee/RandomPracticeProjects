// sort in js is weird. Here is how to sort by numerical order: 
function numberCompare (num1, num2){
    return num1 - num2
}

[6, 15, 4, 10].sort(numberCompare);