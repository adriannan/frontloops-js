const card = document.querySelector(".card");
let isClicked = false,
  winY = window.innerHeight,
  winX = window.innerWidth,
  deg;

card.addEventListener("mousedown", e => {
  isClicked = true;
  document.querySelector("body").style.backgroundColor = "#64316b";
});
addEventListener("mousemove", e => {
  let clX = e.clientX;
  let clY = e.clientY;
  let clX2 = window.innerWidth - e.clientX;
  let clY2 = window.innerHeight - e.clientY;

  if (isClicked) {
    if (clX < winX / 2 && clY < winY / 2) {
      deg = (winY / 2 - Math.abs(clY)) / 20 + (winX / 2 - Math.abs(clX)) / 20;
      card.style.transform = `perspective(1000px) rotate3d(${clX},${-clY},0,${deg}deg)`;
    } else if (clX > winX / 2 && clY < winY / 2) {
      deg = (winY / 2 - Math.abs(clY)) / 20 + (winX / 2 - Math.abs(clX2)) / 20;
      card.style.transform = `perspective(1000px) rotate3d(${clX2},${clY},0,${deg}deg)`;
    } else if (clX < winX / 2 && clY > winY / 2) {
      deg = (winY / 2 - Math.abs(clY2)) / 20 + (winX / 2 - Math.abs(clX)) / 20;
      card.style.transform = `perspective(1000px) rotate3d(${-clX},${-clY2},0,${deg}deg)`;
    } else if (clX > winX / 2 && clY > winY / 2) {
      deg = (winY / 2 - Math.abs(clY2)) / 20 + (winX / 2 - Math.abs(clX2)) / 20;
      card.style.transform = `perspective(1000px) rotate3d(${-clX2},${clY2},0,${deg}deg)`;
    }
  }
});

addEventListener("mouseup", e => {
  isClicked = false;
  document.querySelector("body").style.backgroundColor = "#31326c";
});
