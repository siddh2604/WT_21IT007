"use strict";
function calc() {
    let n1 = prompt("Enter the first number");
    let n2 = prompt("Enter the second number");
    let op = prompt("Enter the operator");
    let result;
    if (op == "+") {
        result = Number(n1) + Number(n2);
    }
    else if (op == "-") {
        result = Number(n1) - Number(n2);
    }
    else if (op == "x") {
        result =
            Number(n1) * Number(n2);
    }
    else if (op == "/") {
        result = Number(n1) / Number(n2);
    }
    alert("Result = " + result);
}
