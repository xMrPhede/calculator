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
const operator = document.querySelector(".operator")
const operators = [plus, minus, times, divided]
let value1 = 0
let value2 = 0
let result = 0
let operatorClicked = false

function manageDisplay(value) {
    if (calcResult.textContent == 0 || operatorClicked == true) {
        if (calcResult.textContent.indexOf(".") != -1) {
            calcResult.textContent = calcResult.textContent.concat(value.id.slice(-1))
            operatorClicked = 0
        } else {
            calcResult.textContent  = value.id.slice(-1)
            operatorClicked = 0
        }
    } else if (calcResult.textContent.length == 10){ 
        return
    } else if (calcResult.textContent.slice(calcResult.textContent.indexOf("."),calcResult.textContent.length >= 4)){
        return
    }
    else {
        calcResult.textContent = calcResult.textContent.concat(value.id.slice(-1))
    }
}

// Add eventListener to all numbers
numbers.forEach(function(element) { 
    element.addEventListener("click", function(e) {
            manageDisplay(e.currentTarget)
        })
    })


// AC function (reset the value in the display)
ac.addEventListener("click", function() {
    calcResult.textContent  = 0
    operator.textContent = ""
})

// Del function (deletes last digit)
del.addEventListener("click", function() {
    if (calcResult.textContent.length > 1) {
        calcResult.textContent = calcResult.textContent.slice(0, calcResult.textContent.length - 1)
    } else {
        calcResult.textContent  = 0
    }
})

// Decimal separator function
dot.addEventListener("click", function() {
    if (calcResult.textContent.indexOf(".") == -1) {
        calcResult.textContent = calcResult.textContent.concat(".".slice(-1))
    }
})

// Operators function
operators.forEach(function(element) {
    element.addEventListener("click", function(e) {
        if (operator.textContent == "") {
        value1 = Number(calcResult.textContent)
        operator.textContent = e.currentTarget.textContent
        operatorClicked = true

        } else {
        value2 = Number(calcResult.textContent)
        result = operation(value1, value2)
        value1 = result
        operator.textContent = e.currentTarget.textContent
        calcResult.textContent = result
        operatorClicked = true

        }
    })
})

function operation(a, b) {
    if (operator.textContent == "+") {
        return a + b
    }
    else if (operator.textContent == "-") {
        return a - b
    }
    else if (operator.textContent == "x") {
        return Math.floor(a * b * 100000) / 100000
    }
    else if (operator.textContent == "÷") {
        if (a == 0 || b == 0) {
            calcResult.textContent = "ERROR"
        } else {
            return Math.floor(a / b * 100000) / 100000
        }
    }
}

equals.addEventListener("click", function() {
    value2 = Number(calcResult.textContent)
    result = operation(value1, value2)
    calcResult.textContent = result
    operator.textContent = ""
})