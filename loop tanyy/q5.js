
var number = parseInt(prompt("Enter a number to check if it's even or odd:"));

for (var i = 0; i <= number; i++) {
    if (i === number) { // Once the loop reaches the input number
        if (number % 2 === 0) {
            console.log("The number " + number + " is even.");
        } else {
            console.log("The number " + number + " is odd.");
        }
    }
}
