// second approach
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// third approach
const blue = document.getElementById("make-blue");
blue.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
// fourth approach
const makePink = document.getElementById("make-pink");
makePink.addEventListener("click", function () {
  document.body.style.backgroundColor = "pink";
});

//   fifth approach
document.getElementById("make-hotPink").addEventListener("click", function () {
  document.body.style.backgroundColor = "hotpink";
});
