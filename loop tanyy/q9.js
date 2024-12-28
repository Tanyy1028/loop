// Prompt the user to enter a number
var number = parseInt(prompt("Enter a number to check if it's prime:"));

// Function to check if the number is prime
var isPrime = true; // Assume the number is prime initially

// Check if the number is less than 2, in which case it's not prime
if (number <= 1) {
    isPrime = false;
} else {
    // Loop to check divisibility from 2 to the square root of the number
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false; // If divisible, it's not prime
            break;
        }
    }
}

// Display the result
if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
