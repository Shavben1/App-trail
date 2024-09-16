const axios = require('axios');

async function getMealsFromIngredients(ingredients) {
    const apiKey = '41b1f7c1d91945dfb52787e9af2d05ce';
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;
    const response = await axios.get(url);

    return response.data.map(recipe => ({
        name: recipe.title,
        description: recipe.summary
    }));
}
