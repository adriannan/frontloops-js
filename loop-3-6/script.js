const btn = document.querySelector(".button");
const body = document.querySelector("body");
const items = [...document.querySelectorAll(".onboarding__item")];
let index = 0;

btn.addEventListener("click", () => {
  btn.style.filter = "brightness(30%)";
  body.style.backgroundColor = "#555";
  items.forEach(item => (item.style.filter = "brightness(30%)"));
  startTrip();
});

function startTrip() {
  items[index].style.filter = "brightness(100%)";
  if (index == items.length - 1) {
    return items[index].addEventListener("click", resetTrip);
  }
  items[index].addEventListener("click", showNext);
}

function showNext() {
  items[index].style.filter = "brightness(30%)";
  items[index + 1].style.filter = "brightness(100%)";
  items[index].removeEventListener("click", showNext);
  index++;
  startTrip();
}

function resetTrip() {
  btn.style.filter = "brightness(100%)";
  body.style.backgroundColor = "#fafafa";
  items.forEach(item => (item.style.filter = "brightness(100%)"));
  items[index].removeEventListener("click", resetTrip);
  return (index = 0);
}
