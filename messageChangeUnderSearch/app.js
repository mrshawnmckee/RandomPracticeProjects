const searching = document.querySelector(".searchMsg")
const search = document.querySelector(".search")
search.addEventListener("input", () => {
    queryAPI()
})
function queryAPI() {
    searching.textContent = `Searching...`
}


// debouncing: https://www.udemy.com/course/pro-javascript/learn/lecture/40746854#overview

// With debouncing, so that it does not do an API call with each letter typed: 
// let debounceTimeout;
// search.addEventListener("input", () => {
//     clearTimeout(debounceTimeout);
//     debounceTimeout = setTimeout(() => {
//         queryAPI(); 
//     }, 400);    //400ms timeout in between typing before calling for the API 
// })