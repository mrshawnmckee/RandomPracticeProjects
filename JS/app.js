const HelloWorld = document.querySelector(".words")
const btn = document.querySelector(".btn").addEventListener("click", () => {
    changeMessage()
})


function changeMessage() {
    HelloWorld.textContent = "Hello"
}

// Simple Caalculator
function simpleCalculator(num1, num2, operator) {
    let answer

    switch (operator){
        case '+':
            answer = num1 + num2 
            break;
        case '-':
            answer = num1 - num2 
            break;
        case '*':
            answer = num1 * num2 
            break;
        case '/':
            answer = num1 / num2 
            break;
        default: 
        throw new Error("Invalid Operator")
    }
    return answer
}
module.exports = simpleCalculator;

// Count Occurences

function countOccurences(str, char) {
 let sum = 0; 
 for(let i = 0; i < str.length; i++) {
    if (str[i] === char){
        sum ++;
    }
 }
 console.log(`There are ${sum} ${char}'s in the string`)
}

// TO do the same with split:
const countOccurencesTwo = (str, char) => {
    // return str.split(char).length - 1;
    console.log(char)
}

// find min and max/
function minMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
        if (arr[i] > max){
            max = arr[i]
        }
        
    }
    console.log(`The smallest number in the array is ${min} and the largest number is ${max}`)
}

// easy way to do this: 
function findMax(arr){
  return Math.max(...arr);
}    
    
// Title case   Retun first letter of each word uppercase, other letters must be lower case
function titleCase(str){
    let caps = str.toLowerCase().split(' ')
    for(let i = 0; i < caps.length; i++){
       caps[i] = caps[i][0].toUpperCase() + caps[i].slice(1)
    }
    console.log(caps)
    let newSentence = caps.join(' ')
    console.log(newSentence)
}