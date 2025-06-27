// Define constants
const calcResult = document.querySelector(".operation")
const ac = document.querySelector("#ac")
const del = document.querySelector("#del")
const numbers = Array.from(document.querySelectorAll(".number"))
const plus = document.querySelector("#add")
const minus = document.querySelector("#subtract")
const times = document.querySelector("#multiply")
const divided = document.querySelector("#divide")
const equals = document.querySelector("#result")
const dot = document.querySelector("#dot")

// Add eventListener to all numbers
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(e) {
        if (calcResult.textContent == 0) {
            calcResult.textContent  = numbers[i].id.slice(-1)
        } else if (calcResult.textContent.length == 11){ 
            return
        }
        else {
            calcResult.textContent = calcResult.textContent.concat(numbers[i].id.slice(-1))
        }
    })
}

// AC function (reset the value in the display)
ac.addEventListener("click", function() {
    calcResult.textContent  = 0
})

// Del function (deletes last digit)
del.addEventListener("click", function() {
    if (calcResult.textContent.length > 1) {
        calcResult.textContent = calcResult.textContent.slice(0, calcResult.textContent.length - 1)
    } else {
        calcResult.textContent  = 0
    }
})

