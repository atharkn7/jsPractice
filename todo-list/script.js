document.addEventListener('DOMContentLoaded', function () {

    const newTask = document.querySelector('#task');
    const submit = document.querySelector('#submit');

    submit.disabled = true;

    newTask.onkeyup = () => {
        if (newTask.value.length > 0) {
            submit.disabled = false;
        } else {
            submit.disabled = true;
        }

    }

    document.querySelector('form').onsubmit = () => {
        task = newTask.value;

        const li = document.createElement('li');
        li.innerHTML = task;
        document.querySelector('#tasks').append(li);

        document.querySelector('#task').value = '';
        submit.disabled = true;

        // Stopping submission
        return false

    }
})