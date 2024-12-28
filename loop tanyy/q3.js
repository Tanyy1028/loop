
var number = parseInt(prompt("Enter a number:"));


console.log("Multiplication table " + number);
for (var i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}
