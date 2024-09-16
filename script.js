document.getElementById('getMeals').addEventListener('click', function () {
    const ingredients = document.getElementById('ingredients').value;

    fetch('http://localhost:3000/get-meals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ingredients: ingredients })
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('mealSuggestions');
        resultDiv.innerHTML = '';

        if (data.meals.length > 0) {
            data.meals.forEach(meal => {
                resultDiv.innerHTML += `<p><strong>${meal.name}</strong>: ${meal.description}</p>`;
            });
        } else {
            resultDiv.innerHTML = '<p>No meals found for the given ingredients.</p>';
        }
    })
    .catch(error => console.error('Error:', error));
});
