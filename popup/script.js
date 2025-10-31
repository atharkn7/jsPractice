document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('button').onclick = () => {

        const heading = document.querySelector('h1');

        if (heading.innerHTML === 'Hello') {
            heading.innerHTML = 'Bye';
        } else {
            heading.innerHTML = 'Hello';
        }

    }
})