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

// Reverse a string
function reverseString(str){
    let newString = '';
    for (let i = 0; i < str.length; i++){
        newString = str[i] + newString
    }
    console.log(newString)
}

// Or do it with reversed str:
function reverseStringTwo(str){
    let reversed = '';
    for(let i = str.length -1; i >= 0; i--){
        reversed += str[i]
    }
    console.log(reversed)
}

// To do it another way: 
// Turn into an array(with split), then reverse the array(.reverse), then join back together
function reverseStringEasy(str){
    return str.split('').reverse().join('')
}

// Palindrome (with stripped out non alphanumeric characters)
// ^ means anything that is not the following, g is for global, then , '' means replace with nothing
// To remove nonalphanumeric: .replace(/[^a-z0-9/g, '')
function isPalindrome(str) {
    const formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = formattedString.split('').reverse().join('')
    for(let i = 0; i < str.length; i++){
        if(formattedString[i] === reversed[i]){
            console.log(`${formattedString} is a palindrome`)

        } else {
         console.log(`${str} is not a palindrome`)
        }
    }
}



// Count Vowels

function countVowels(str){
    let count = 0;
    const newStr = str.toLowerCase()
    for(let i = 0; i < newStr.length; i++){
        const char = newStr[i]
        if(
            char === 'a' || 
            char === 'e' || 
            char === 'i' || 
            char === 'o' || 
            char === 'u'
            ) {
            count ++;
        }
    }
    console.log(`There are ${count} vowels in the string`)
}

// Remove Dupllicates
function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++){
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i]);
        }
    }
    console.log(uniqueArray)
}

// Easy way: Beacuse sets cannot include duplicates: 
function removeDupesEasy(arr){
    return Array.from(new Set(arr));
}