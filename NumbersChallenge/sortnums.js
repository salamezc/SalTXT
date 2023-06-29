document.addEventListener('DOMContentLoaded', function() {
    var sortButton = document.getElementById('sortButton');
    sortButton.addEventListener('click', sortNumbers);
});

function sortNumbers() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    //grabs the 3 numbers inputted by the user in HTML program and stores each of them as an int
    var numbers = [num1, num2, num3]
    // creates an array that stores the inputted numbers
    var sorted = numbers.sort(function(a, b) {return a - b;})
    // sorts the array of inputted numbers in ascending order and stores them in a new array
    document.getElementById('result').textContent = "Ascending Numbers: " + sorted.join(', ');
    //grabs the result portion of the HTML program and displays the sorted ascended numbers
}