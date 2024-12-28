// Prompt the user to enter a positive integer
var number = parseInt(prompt("Enter a positive integer to count the number of digits:"));

// Initialize a counter for digits
var count = 0;

// Use a while loop to count digits
while (number > 0) {
    number = Math.floor(number / 10); // Remove the last digit
    count++; // Increment the digit count
}

// Display the result
console.log("The number of digits is: " + count);
