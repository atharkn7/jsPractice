// Changes heading on some event
function hello() {
    const heading = document.querySelector('h1');
    if (heading.innerHTML === 'Hello') {
        heading.innerHTML = 'Bye';
    } else {
        heading.innerHTML = 'Hello';
    }
}

// Alert users name from form
function greet() {
    const name = document.querySelector('#name').value;
    alert(`Hello, ${name}`)
}


// Running functions after DOM Content 
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').onclick = hello;
    document.querySelector('form').onsubmit = greet;
})