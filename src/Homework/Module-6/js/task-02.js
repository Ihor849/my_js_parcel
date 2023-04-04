const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

function onCurrentIngredientCard() {
  const arrayIngredients = [];
  ingredients.map((ingredient) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.classList.add("item");
    ingredientEl.textContent = `${ingredient}`;

    arrayIngredients.push(ingredientEl);
  });
  ingredientsList.append(...arrayIngredients);
  return ingredientsList;
}

console.log(onCurrentIngredientCard(ingredients));
