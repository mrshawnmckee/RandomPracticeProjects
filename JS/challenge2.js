// FIzzBuzzArray
function fizzBuzzArray(num) {
    let arr = []
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push("FizzBuzz")
        } else if (i % 3 === 0){
            arr.push("Fizz")
        } else if (i % 5 === 0){
            arr.push("Buzz")
        } else {
            arr.push(i)
        }
    }
    return arr
}

// Array Intersection

function arrayIntersection(arr1, arr2){
    const newArr = [];
    for(let i = 0; i < arr1.length; i++){
        if(arr2.find(element => element === arr1[i])){
            newArr.push(arr1[i])
        }
    }
    return newArr
}

function arrayIntersectTwo(arr1, arr2){
    const newArr = [];
    for(let i = 0; i < arr1.length; i ++){
        // The && part here is to ensure that there are no duplicates; if arr1[i] is already in newarr, dont push
        if(arr2.includes(arr1[i]) && !newArr.includes(arr1[i])){
            newArr.push(arr1[i])
        }
    }
    return newArr
}

// Display Likes
function displayLikes(names){
    const length = names.length
    if(length === 0){
        return `no one likes this`
    } else if (length === 1){
        return `${names[0]} likes this`
    } else if (length === 2){
        return `${names[0]} and ${names[1]} like this`
    } else {
        return `${names[0]}, ${names[1]}, and ${length - 2} others like this`
    }
}

// Find the missing number, from an array from 1 to n(or n down to 1)
function findTheMissingNumber(arr){
    if(arr.length === 0) return 1;
    
    const n = arr.length + 1;
    const expectedSum = n * (n + 1)/ 2
    let actualSum = 0;
    
    for(let i = 0; i < arr.length; i++){
        actualSum += arr[i] 
    }
    const missingNumber = expectedSum - actualSum
    
    return `The missing number is ${missingNumber}`

}