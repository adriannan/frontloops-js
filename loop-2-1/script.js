const btn = document.querySelector("button");
const inp = document.querySelector(".inp");
const inputs = [...document.querySelectorAll("input")];

let chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Backspace"].map(char =>
  char.toString()
);
inputs.forEach(item => {
  item.addEventListener("input", e => {
    const { value, maxLength } = e.target;
    const next = e.target.nextElementSibling;
    if (value.length > maxLength) e.target.value = value.slice(0, maxLength);
    if (value !== "" && next !== null) {
      next.value = "";
      next.focus();
    }
  });
});
inputs.forEach(item => {
  item.addEventListener("click", e => {
    if (e.target.value === "") {
      let emptyInputIndex = inputs.filter(input => {
        return input.value;
      }).length;
      inputs[emptyInputIndex].focus();
    } else {
      e.target.value = "";
    }
  });
});
inputs.forEach(item => {
  item.addEventListener("keydown", e => {
    if (!chars.includes(e.key)) {
      e.preventDefault();
    }
    if (e.key === "Backspace" && e.target.previousElementSibling !== null) {
      if (e.target.value !== "") {
        e.target.value = "";
      } else {
        e.target.previousElementSibling.focus();
      }
    }
  });
});

btn.addEventListener("click", () => {
  if (inputs.filter(input => input.value).length < inputs.length) {
    alert(`Ooops! Code is too short.
Please, provide a right code`);
    event.preventDefault();
  }
});
