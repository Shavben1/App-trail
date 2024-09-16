const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests for frontend to connect

const sampleMeals = [
    { name: 'Chicken Stir Fry', description: 'A delicious stir fry made with chicken and vegetables.' },
    { name: 'Garlic Tomato Pasta', description: 'Pasta cooked with garlic and tomatoes, perfect for a quick meal.' },
    { name: 'Rice and Beans', description: 'A simple and nutritious meal with rice and beans.' },
];

// Simple meal suggestion function based on ingredients
function getMealsFromIngredients(ingredients) {
    const ingredientList = ingredients.split(',').map(i => i.trim().toLowerCase());

    const meals = sampleMeals.filter(meal => {
        return ingredientList.some(ingredient => meal.description.toLowerCase().includes(ingredient));
    });

    return meals.length > 0 ? meals : [];
}

// Route to handle meal suggestions
app.post('/get-meals', (req, res) => {
    const { ingredients } = req.body;
    const meals = getMealsFromIngredients(ingredients);
    res.json({ meals });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
