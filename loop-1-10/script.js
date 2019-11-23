const card = document.getElementById("card");

let clientX, clientY, cardX, cardY;

let isClicked = false;

card.addEventListener("mousedown", e => {
  cardX = e.offsetX;
  cardY = e.offsetY;
  isClicked = !isClicked;
  card.style.transform = "scale(.96)";
  card.style.opacity = ".9";
});

card.addEventListener("mousemove", e => {
  if (isClicked) {
    card.style.cursor = "grabbing";
    clientX = e.clientX;
    clientY = e.clientY;
    card.style.top = `${clientY - cardY}px`;
    card.style.left = `${clientX - cardX}px`;
  }
});
card.addEventListener("mouseup", () => {
  isClicked = false;
  card.style.cursor = "grab";
  card.style.transform = "scale(1)";
  card.style.opacity = "1";
});
