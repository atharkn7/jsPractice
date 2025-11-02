document.addEventListener('DOMContentLoaded', () => {
    // Getting a NodeList of all buttons and looping
    // Kinda same as for button in buttons: (in pyton)
    document.querySelectorAll('button').forEach((button) => {
        // Running onclick on each interation
        button.onclick = () => {
            // Setting dataset value as the color of each button
            document.querySelector('#circle').style.backgroundColor = button.dataset.color;
        }
    })
})