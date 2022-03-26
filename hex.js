const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn"); //capturing btn element form simple html

const color = document.querySelector(".color"); // capturing class color from simple html

btn.addEventListener("click", function () {
  let hexColor = "#";

  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;

  document.body.style.backgroundColor = hexColor;

  return hexColor;
});

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * hex.length);

  return randomNumber;
}

function copyHex() {
  var copyText = document.getElementById("hexColor").textContent;

  const copiedContent = copyText;
  navigator.clipboard.writeText(copiedContent);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copiedContent;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
