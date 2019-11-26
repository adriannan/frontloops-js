const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const cards = [...document.querySelectorAll(".card")];
const slider = document.querySelector(".slider");

let scroll = -1;

function setPos() {
  if (scroll < 0) return (slider.scrollLeft = 0);
  slider.scrollLeft = cards[scroll].offsetWidth + cards[scroll].offsetLeft;
}

slider.addEventListener("scroll", setPos);

btnNext.addEventListener("click", () => {
  if (scroll === -1) {
    btnPrev.classList.toggle("btn-disable");
  } else if (scroll === 3) btnNext.classList.toggle("btn-disable");
  scroll++;
  setPos();
});
btnPrev.addEventListener("click", () => {
  scroll--;
  if (scroll === -1) {
    slider.scrollLeft = 0;
    btnPrev.classList.toggle("btn-disable");
  } else if (scroll === 3) {
    btnNext.classList.toggle("btn-disable");
    setPos();
  } else {
    setPos();
  }
});
