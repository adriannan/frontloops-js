const box = document.querySelector(".box");
const dot = document.querySelector(".dot");

let xPos = box.clientWidth / 2 - dot.offsetWidth;
let yPos = box.clientHeight / 2 - dot.offsetHeight;
let z = 1;
dot.style.transform = `translate(${xPos}px, ${yPos}px)`;

addEventListener("keyup", e => {
  z = 1;
});
addEventListener("keydown", e => {
  z = z * 2;

  switch (e.keyCode) {
    case 39:
      if (xPos < box.clientWidth - dot.offsetWidth) {
        xPos = xPos + z;
        if (xPos > box.clientWidth) {
          xPos = box.clientWidth - dot.offsetWidth;
        }
        dot.style.transform = `translate(${xPos}px, ${yPos}px)`;
      }
      break;
    case 37:
      if (xPos > 0) {
        xPos = xPos - z;
        if (xPos < -dot.offsetWidth) {
          xPos = 0;
        }
        dot.style.transform = `translate(${xPos}px, ${yPos}px)`;
      }
      break;
    case 38:
      if (yPos > 0) {
        yPos = yPos - z;
        if (yPos < -dot.offsetHeight) {
          yPos = 0;
        }
        dot.style.transform = `translate(${xPos}px, ${yPos}px)`;
      }
      break;
    case 40:
      if (yPos < box.clientHeight - dot.offsetHeight) {
        yPos = yPos + z;
        if (yPos > box.clientHeight) {
          yPos = box.clientHeight - dot.offsetHeight;
        }
        dot.style.transform = `translate(${xPos}px, ${yPos}px)`;
      }
      break;
  }
});
