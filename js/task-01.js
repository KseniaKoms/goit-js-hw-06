// const listCategoriesEl = document.querySelectorAll(".item");
// console.log(listCategoriesEl);

const listEl = document.querySelector("#categories");
console.log(`Number of categories: ${listEl.children.length}`);

const categoriesEl = document.querySelectorAll("li.item");
categoriesEl.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`)
})

