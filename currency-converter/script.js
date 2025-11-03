document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('form').onsubmit = () => {
        // Fetch data from API
        fetch('https://api.exchangeratesapi.io/v1/latest?access_key=4ecb5d62c34145cf45bd78184a1dd4ef&format=1')
            .then(response => response.json())  // Converting response to JSON
            .then(data => {

                const currency = document.querySelector('#currency').value.toUpperCase();
                const rates = data.rates[currency]

                if (rates !== undefined) {
                    document.querySelector('#searched_currency').innerHTML = currency;
                    document.querySelector('#rate').innerHTML = rates.toFixed(3);
                } else {
                    document.querySelector('#searched_currency').innerHTML = 'Invalid Currency';
                }

            })
            .catch(error => console.log('Error', error));   // Logging error on console

        // Stopping default submission
        return false;
    }
})