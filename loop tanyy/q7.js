// Number of rows for the pattern
var rows = 5;

for (var i = 1; i <= rows; i++) {
    var row = ''; // Initialize the row string
    
    // Inner loop to add '*' characters
    for (var j = 1; j <= i; j++) {
        row += '* '; // Append '*' followed by a space
    }

    // Print the row
    console.log(row);
}
