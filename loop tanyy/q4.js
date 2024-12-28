
var n = parseInt(prompt("Enter a number to calculate its factorial:"));
var factorial = 1;

for (var i = 1; i <= n; i++) {
    factorial *= i; 
}

console.log("The factorial of " + n + " is: " + factorial);
