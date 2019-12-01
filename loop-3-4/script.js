const btnDefault = document.querySelector("#btn-default");
const btnError = document.querySelector("#btn-error");
const msgDefault = document.querySelector(".message-default");
const msgError = document.querySelector(".message-error");

let timeoutIndex;
let isMsgActive = false;

const showMsg = msg => {
  msg.style.display = "block";
  isMsgActive = true;
};
const hideMsg = msg => {
  return setTimeout(() => {
    msg.style.display = "none";
    isMsgActive = false;
  }, 1500);
};

btnDefault.addEventListener("click", () => {
  if (isMsgActive) return;

  showMsg(msgDefault);
  timeoutIndex = hideMsg(msgDefault);
});
btnError.addEventListener("click", () => {
  if (isMsgActive) return;

  showMsg(msgError);
  timeoutIndex = hideMsg(msgError);
});

msgDefault.addEventListener("mouseover", () => {
  clearTimeout(timeoutIndex);
});
msgDefault.addEventListener("mouseleave", () => {
  hideMsg(msgDefault);
});
msgError.addEventListener("mouseover", () => {
  clearTimeout(timeoutIndex);
});
msgError.addEventListener("mouseleave", () => {
  hideMsg(msgError);
});
