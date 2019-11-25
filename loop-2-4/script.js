const name = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const passConf = document.querySelector("#pass-conf");
const btnSub = document.querySelector("button");

const validate = () => {
  let valName = false;
  let valEmail = false;
  let valPass = false;
  let valPassConf = false;
  let valCorrect = false;

  if (name.value !== "") {
    valName = true;
    document.querySelector(".error[data-cat='name']").style.display = "none";
  } else
    document.querySelector(".error[data-cat='name']").style.display = "block";
  if (email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1) {
    valEmail = true;
    document.querySelector(".error[data-cat='email']").style.display = "none";
  } else
    document.querySelector(".error[data-cat='email']").style.display = "block";
  if (pass.value !== "") {
    valPass = true;
    document.querySelector(".error[data-cat='pass']").style.display = "none";
  } else
    document.querySelector(".error[data-cat='pass']").style.display = "block";
  if (passConf.value === pass.value) {
    valPassConf = true;
    document.querySelector(".error[data-cat='pass-conf']").style.display =
      "none";
  } else
    document.querySelector(".error[data-cat='pass-conf']").style.display =
      "block";
  if (valName && valEmail && valPass && valPassConf) {
    valCorrect = true;
  }
  return valCorrect;
};

btnSub.addEventListener("click", e => {
  e.preventDefault();
  let valid = validate();
  if (valid) {
    document.querySelector("form").submit();
  }
});
