const catEl = document.querySelectorAll("ul#categories");
const itemsEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemsEl.length}`);

const itemsName = itemsEl.forEach((item) => {
  const head = item.querySelector("h2").textContent;
  const list = item.querySelectorAll("li").length;
  console.log(`Category: ${head}`);
  console.log(`Elements: ${list}`);
});
