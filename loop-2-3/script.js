const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const cards = [...document.querySelectorAll(".card")];
const slider = document.querySelector(".slider");
const sliderContent = document.querySelector(".content");

let index = 0;
let offsetLeft = cards[0].offsetLeft;
let scroll = 0;
let maxScroll = 0;

cards.forEach(card => {
  maxScroll = maxScroll + card.offsetWidth + offsetLeft;
});

btnNext.addEventListener("click", () => {
  btnPrev.style.display = "block";

  if (scroll > maxScroll - 0.72 * slider.offsetWidth) {
    btnNext.style.display = "none";
    sliderContent.style.transform = `translateX(-${scroll}px)`;
  }

  scroll = scroll + cards[index].offsetWidth + offsetLeft;
  sliderContent.style.transform = `translateX(-${scroll}px)`;
  index++;
});

btnPrev.addEventListener("click", () => {
  btnNext.style.display = "block";
  if (scroll < cards[1].offsetWidth) {
    btnPrev.style.display = "none";
  }
  index--;

  scroll = scroll - cards[index].offsetWidth - offsetLeft;
  sliderContent.style.transform = `translateX(-${scroll}px)`;
});
