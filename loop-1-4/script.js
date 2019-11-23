const btns = [...document.querySelectorAll("button")];
const list = [...document.querySelectorAll(".steps li")];
const instructions = [...document.querySelectorAll(".instruction")];

const setStep = (index, type) => {
  instructions.forEach(item => {
    item.classList.remove("instruction-visible");
  });
  instructions[index - 1].classList.add("instruction-visible");

  if (type === "next") {
    if (index <= list.length) {
      list[index - 1].classList.add("step-active");
    }
  } else if (type === "back") {
    if (index <= list.length) {
      list[index].classList.remove("step-active");
    }
  } else if (type === "list") {
    list.forEach(li => {
      li.classList.remove("step-active");
    });
    for (let i = 0; i < index; i++) {
      list[i].classList.add("step-active");
    }
  }
};

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    let index = e.target.dataset.key;
    let type = e.target.dataset.type;
    setStep(index, type);
  });
});
list.forEach(li => {
  li.addEventListener("click", e => {
    let index = e.target.dataset.key;
    if (list[index - 1].className == "step-active") {
      setStep(index, "list");
    } else {
      btns.forEach(btn => {
        btn.classList.toggle("button-confirm");
        setTimeout(() => btn.classList.toggle("button-confirm"), 1000);
      });
    }
  });
});
