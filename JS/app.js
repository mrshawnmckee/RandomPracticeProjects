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