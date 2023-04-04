// НАХОДИМО  ARRAY listItem
const listItem = document.querySelectorAll(".item");

// НАХОДИМО  ДОВЖИНУ ARRAY  listItem
console.log(`Number of categories: ${listItem.length}`); // 3

listItem.forEach((item) => {
  console.log(`Category: ${item.children[0].textContent}`);
  console.log(`Element: ${item.lastElementChild.children.length}`);
});
