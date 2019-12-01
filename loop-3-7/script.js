const cursor = document.querySelector(".cursor");
// const cursorClick = document.querySelector(".cursor__effect");
addEventListener("mousemove", e => {
  cursor.style.transform = `translate(${e.pageX -
    cursor.clientWidth / 2}px, ${e.pageY - cursor.clientHeight / 2}px)`;
});
addEventListener("click", e => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("cursor__effect--click");
  document.body.appendChild(newDiv);
  newDiv.style.top = `${e.pageY -
    newDiv.clientHeight / 2 -
    cursor.clientHeight / 4}px`;
  newDiv.style.left = `${e.pageX -
    newDiv.clientHeight / 2 -
    cursor.clientHeight / 4}px`;
  setTimeout(() => {
    document.body.removeChild(newDiv);
  }, 600);
});
// addEventListener("click", e => {
//   cursorClick.style.top = `${e.pageY -
//     cursorClick.clientHeight / 2 -
//     cursor.clientHeight / 4}px`;
//   cursorClick.style.left = `${e.pageX -
//     cursorClick.clientHeight / 2 -
//     cursor.clientHeight / 4}px`;
//   cursorClick.classList.add("cursor__effect--click");
//   setTimeout(() => {
//     cursorClick.classList.remove("cursor__effect--click");
//   }, 600);
// });
