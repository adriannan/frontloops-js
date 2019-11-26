const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const cards = [...document.querySelectorAll(".card")];
const slider = document.querySelector(".slider");
const sliderContent = document.querySelector(".content");

let offsetLeft = cards[0].offsetLeft;
let maxScroll = 0;

let index, scroll, pos;

cards.forEach(card => {
  maxScroll = maxScroll + card.offsetWidth + offsetLeft;
});
const reset = () => {
  (index = 0), (scroll = 0), (pos = maxScroll);
};
const setPos = () => (pos = pos - cards[index].offsetWidth - offsetLeft);
const setTranslate = num => {
  sliderContent.style.transform = `translateX(-${num}px)`;
};

reset();

btnNext.addEventListener("click", () => {
  btnPrev.style.display = "block";
  setPos();

  if (pos < slider.offsetWidth) {
    btnNext.style.display = "none";
    pos = maxScroll;
    return setTranslate(maxScroll - slider.offsetWidth);
  }

  scroll = scroll + cards[index].offsetWidth + offsetLeft;
  setTranslate(scroll);
  index++;
});

btnPrev.addEventListener("click", () => {
  btnNext.style.display = "block";
  if (scroll < cards[1].offsetWidth) {
    btnPrev.style.display = "none";
    reset();
    return setTranslate(0);
  }
  if (pos == maxScroll) {
    setPos();
    return setTranslate(440);
  }
  setPos();
  index--;

  scroll = scroll - cards[index].offsetWidth - offsetLeft;
  setTranslate(scroll);
});
