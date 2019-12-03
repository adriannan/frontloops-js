const textarea = document.querySelector("textarea");
const textareaWrap = document.querySelector(".textarea-wrapper");

textarea.contentEditable = "true";

textarea.addEventListener("input", e => {
  string = textarea.value;

  string = string.replace(
    /(\s)(#[a-z|\d]+)/gim,
    '$1<span class="hashtag">$2</span>'
  );

  textareaWrap.innerHTML = string + `<span class="cursor"></span>`;
});
