document.addEventListener('DOMContentLoaded', () => {

    /* Earlier workflow using buttons
    
    document.querySelectorAll('button').forEach((button) => {
        // Running onclick on each interation
        button.onclick = () => {
            // Setting dataset value as the color of each button
            document.querySelector('#circle').style.backgroundColor = button.dataset.color;
    */

    document.querySelector('select').onchange = function () {
        // Using 'this' we get value from <option>
        document.querySelector('#circle').style.backgroundColor = this.value;
    }
});

