const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul#ingredients");

const listCreate = ingredients.forEach((el) => {
  const listIng = document.createElement("li");
  listIng.textContent = el;
  listIng.classList.add("item");
  list.appendChild(listIng);
  console.log(listIng);
});
