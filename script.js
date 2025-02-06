document.getElementById('getJokeButton').addEventListener('click', function() {
    const jokeElement = document.getElementById('joke');
    const errorMessage = document.getElementById('errorMessage');

    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            jokeElement.textContent = `${data.setup} - ${data.punchline}`;
            errorMessage.textContent = '';
        })
        .catch(error => {
            jokeElement.textContent = '';
            errorMessage.textContent = 'Failed to fetch joke';
        });
});