document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('select').onchange = function () {
        // Setting dataset value as the color of each button
        document.querySelector('#circle').style.backgroundColor = this.value;
    }
})