// Recipe data
const recipes = [
    {
        id: 1,
        title: "Paneer Butter Masala",
        time: 30,
        difficulty: "easy",
        description: "Soft paneer cubes cooked in a rich and creamy tomato-based gravy.",
        category: "indian",
    },
    {
        id: 2,
        title: "Vegetable Biryani",
        time: 50,
        difficulty: "medium",
        description: "Aromatic basmati rice cooked with vegetables and traditional spices.",
        category: "rice",
    },
    {
        id: 3,
        title: "Chocolate Lava Cake",
        time: 40,
        difficulty: "hard",
        description: "Warm chocolate cake with a gooey molten chocolate center.",
        category: "dessert",
    },
    {
        id: 4,
        title: "Avocado Toast",
        time: 10,
        difficulty: "easy",
        description: "Crispy toast topped with mashed avocado, lemon, and seasoning.",
        category: "breakfast",
    },
    {
        id: 5,
        title: "Grilled Chicken Sandwich",
        time: 25,
        difficulty: "medium",
        description: "Juicy grilled chicken layered with fresh veggies and sauces.",
        category: "snacks",
    },
    {
        id: 6,
        title: "Vegetable Manchurian",
        time: 35,
        difficulty: "medium",
        description: "Crispy vegetable balls tossed in a spicy Indo-Chinese sauce.",
        category: "chinese",
    },
    {
        id: 7,
        title: "Pancakes with Maple Syrup",
        time: 20,
        difficulty: "easy",
        description: "Fluffy pancakes served with maple syrup and butter.",
        category: "breakfast",
    },
    {
        id: 8,
        title: "Cheese Garlic Bread",
        time: 15,
        difficulty: "easy",
        description: "Toasted bread topped with garlic butter and melted cheese.",
        category: "baking",
    },
];

// DOM Selection
const recipeContainer = document.querySelector('#recipe-container');

// Create recipe card
const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">
                    ${recipe.difficulty}
                </span>
            </div>
            <p>${recipe.description}</p>
        </div>
    `;
};

// Render recipes
const renderRecipes = (recipesToRender) => {
    const recipeCardsHTML = recipesToRender
        .map(createRecipeCard)
        .join('');

    recipeContainer.innerHTML = recipeCardsHTML;
};

// Initialize App
renderRecipes(recipes);
