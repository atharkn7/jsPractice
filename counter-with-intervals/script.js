// Creating a variable for count
let counter = 0;

// Function to increment count
function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
    if (counter % 10 === 0) {
        alert(`Current count: ${counter}`)
    }
}

// Calling after content is loaded
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('button').onclick = count

})