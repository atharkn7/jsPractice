if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

let counter = localStorage.getItem('counter');

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;

    /*
    if (counter % 10 === 0) {
        alert(`Current Count: ${counter}`)
    } 
    */

    localStorage.setItem('counter', counter)
}

document.addEventListener('DOMContentLoaded', () => {
    // Assign heading from local storage
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');

    // Do per second and on interval
    document.querySelector('button').onclick = count;
    setInterval(count, 1000);
})