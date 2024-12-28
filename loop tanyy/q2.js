
var n = parseInt(prompt("Enter a positive number:"));

var sum = 0;
for (var i = 1; i <= n; i++) {
    sum += i; 
}


console.log("The sum of the first " + n + " natural numbers is: " + sum);
