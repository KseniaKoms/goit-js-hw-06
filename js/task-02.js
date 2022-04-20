const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const categoryListEl = document.querySelector("#ingredients");

const listItemEl = ingredients.map(ingredient => {

  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  return itemEl
})

categoryListEl.append(...listItemEl);





