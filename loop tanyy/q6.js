
var number = parseInt(prompt("Enter a number to reverse:"));

var reversed = 0;
while (number > 0) {
    var digit = number % 10; 
    reversed = reversed * 10 + digit; 
    number = Math.floor(number / 10); 
}
console.log("The reversed number is: " + reversed);
