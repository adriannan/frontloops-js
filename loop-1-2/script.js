// alert("helo");
const input = document.querySelector("input");
const btn = document
  .querySelector(".btn-change")
  .addEventListener("click", () => {
    event.preventDefault();
    let keys = ["1", "2", "3"];
    let index = input.value;
    input.value = "";

    if (!keys.includes(index)) {
      alert("Index is invalid");
      return;
    }
    showContent(index);
  });

const tabs = [...document.querySelectorAll(".tab")];
const contents = [...document.querySelectorAll(".content")];

const showContent = e => {
  let key;
  if (typeof e == "object") {
    key = e.target.dataset.key;
  } else if (typeof e == "string") {
    key = e;
  }

  tabs.forEach(tab => tab.classList.remove("tab-active"));
  document
    .querySelector(`button[data-key="${key}"]`)
    .classList.add("tab-active");
  contents.forEach(item => item.classList.remove("content-visible"));
  document
    .querySelector(`div[data-key="${key}"]`)
    .classList.add("content-visible");
};

tabs.forEach(tab => {
  tab.addEventListener("click", event => showContent(event));
});
