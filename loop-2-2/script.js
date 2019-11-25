const btn = document.querySelector("button");
const display = document.querySelector(".display");
const items = [...document.querySelectorAll("li")];
let itemsActive = [],
  itemsList = [];

const getActive = () => {
  itemsActive = items.filter(item => item.classList.contains("active"));
  itemsList = itemsActive.map(item => item.innerText);

  return itemsActive, itemsList;
};
const displayActive = () => {
  getActive();
  switch (itemsList.length) {
    case 0:
      display.textContent = "Please, select your food";
      break;
    case 1:
      display.textContent = itemsList[0];
      break;
    case 2:
      display.textContent = `${itemsList[0]}, ${itemsList[1]}`;
      break;
    default:
      display.textContent = `${itemsList[0]}, ${
        itemsList[1]
      } and ${itemsList.length - 2} more`;
  }
};

items.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    getActive();
    if (itemsActive.length !== items.length) {
      btn.classList.remove("active");
    } else {
      btn.classList.add("active");
    }
    displayActive();
  });
});

btn.addEventListener("click", () => {
  getActive();
  if (itemsActive.length !== items.length) {
    items.forEach(item => {
      item.classList.add("active");
      btn.classList.add("active");
    });
  } else {
    items.forEach(item => {
      item.classList.remove("active");
      btn.classList.remove("active");
    });
  }
  displayActive();
});
