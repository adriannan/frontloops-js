// alert("ok");

const btn = document.querySelector("button");
const inp = document.querySelector(".inp");
const inputs = [...document.querySelectorAll("input")];

let invalidChars = ["-", "+", "e", ",", "."];

inputs.forEach(item => {
  item.addEventListener("input", e => {
    const { value, maxLength } = e.target;
    const next = e.target.nextElementSibling;
    if (value.length > maxLength) e.target.value = value.slice(0, maxLength);
    // debugger;

    if (value !== "" && next !== null) {
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
    }
  });
});
inputs.forEach(item => {
  item.addEventListener("keydown", e => {
    if (invalidChars.includes(e.key)) {
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
